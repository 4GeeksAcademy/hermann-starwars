"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users, Posts, Followers, Characters, Planets, CharacterFavorites, PlanetFavorites, Comments
from datetime import datetime
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import requests


api = Blueprint('api', __name__)
CORS(api) # Allow CORS requests to this API

@api.route("/login", methods=["POST"])
def login():
    response_body = {}
    data = request.json
    email = data.get("email", None)
    password = request.json.get("password", None)
    user = db.session.execute(db.select(Users).where(Users.email == email, Users.password == password, Users.is_active)).scalar()
    if not user:
        response_body['message']="Bad email or password"
        return response_body, 401
    access_token = create_access_token(identity={"email": user.email, "user_id": user.id, "is_admin": user.is_admin})
    response_body['message']=f'Bienvenido {email}'
    response_body['access_token']=access_token
    return response_body, 200


@api.route("/protected", methods=["GET"])
@jwt_required() #Valida si llega el Token y si es valido
def protected():
    response_body = {}
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    response_body['logged_in_as'] = current_user
    return response_body, 200
    

@api.route('/users', methods=['GET'])
def users():
    response_body = {}
    rows = db.session.execute(db.select(Users)).scalars()
    results = [row.serialize() for row in rows]
    response_body['message'] = "Listado de Usuarios y Publicaciones (GET)"
    response_body['results'] = results
    return response_body, 200

# Endpoints de publicaciones (POST) 'CRUD'
@api.route('/posts', methods=['GET', 'POST'])
def posts():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Posts)).scalars()
        # results = []
         # for row in rows:
            # results.append(row.serialize())
        results = [row.serialize() for row in rows]
        response_body['message'] = "Listado de Publicaciones (GET)"
        response_body['results'] = results
        return response_body, 200
    if request.method == 'POST':
        data = request.json

        row = Posts(title=data.get('title'),
                    description=data.get('description'),
                    body=data.get('body'),
                    date=datetime.now(),
                    image_url=data.get('image_url'),
                    user_id=data.get('user_id'))
        
        db.session.add(row)
        db.session.commit()
        response_body['message'] = "Creando una Publicacion (POST)"
        response_body['results'] = {}
        return response_body, 200
    
@api.route('/posts/<int:id>', methods=['GET', 'DELETE', 'PUT'])
@jwt_required()
def post(id):
    response_body = {}
     # post = db.session.get(Posts, id)
    post = db.session.execute(db.select(Posts).where(Posts.id == id)).scalar()

    if not post:
        response_body['message'] = f"La publicación {id} no existe"
        response_body['results'] = {}
        return response_body, 404
    
    current_user = get_jwt_identity()
    if post.user_id != current_user['user_id']:
        response_body['message'] = f"No puedes gestionar la Publicación: {id}"
        response_body['results'] = {}
        return response_body, 401

    if request.method == 'GET':
        response_body['message'] = f"Datos de la publicacion: {id} - (GET)"
        response_body['results'] = post.serialize()
        return response_body, 200
    if request.method == 'PUT':
        data = request.json

        post.title = data.get('title')
        post.description = data.get('description')
        post.body = data.get('body')
        post.image_url = data.get('image_url')
        post.date = datetime.now()

        db.session.commit()
        response_body['message'] = f"Publiacion {id} modifiacada - (PUT)"
        response_body['results'] = post.serialize()
        return response_body, 200
    if request.method == 'DELETE':
        db.session.delete(post)
        db.session.commit()

        response_body['message'] = f"Publicacion {id} eliminada - (DELETE)"
        response_body['results'] = {}
        return response_body, 200
    
@api.route('/users/<int:id>/following', methods=['GET'])
def follows(id):
    response_body = {}
    # Obtener usuarios a los que el usuario con el `id` dado está siguiendo
    rows = db.session.execute(db.select(Followers).where(Followers.follower_id == id)).scalars()

    results = [row.serialize_following() for row in rows]
    response_body['message'] = f"Lista de usuarios que sigues"
    response_body['results'] = results
    return response_body, 200

@api.route('/users/<int:id>/followers', methods=['GET'])
def followers(id):
    response_body = {}
    
    # Obtener usuarios que siguen al usuario con el `id` dado
    rows = db.session.execute(db.select(Followers).where(Followers.following_id == id)).scalars()

    results = [row.serialize_followers() for row in rows]
    response_body['message'] = f"Lista de usuarios que te siguen"
    response_body['results'] = results
    return response_body, 200

@api.route('/characters', methods=['GET'])
def characters():
    response_body = {}
    url = 'https://www.swapi.tech/api/people'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        rows = data['results']
        characters_list = []

        for row in rows:
            char_url = row['url']
            char_response = requests.get(char_url)

            if char_response.status_code == 200:
                char_data = char_response.json()
                characters_details = char_data['result']['properties']

                existing_character = Characters.query.filter_by(name=characters_details['name']).first()
                if not existing_character:
                    character = Characters(name = characters_details.get('name'),
                                        height = characters_details.get('height'),
                                        mass = characters_details.get('mass'),
                                        hair_color = characters_details.get('hair_color'),
                                        skin_color = characters_details.get('skin_color'),
                                        eye_color = characters_details.get('eye_color'),
                                        birth_year = characters_details.get('birth_year'),
                                        gender = characters_details.get('gender'))
                    
                    db.session.add(character)
                    db.session.commit()
                characters_list.append(characters_details)

            response_body['message'] = "Lista de personajes detallados"
            response_body['results'] = characters_list
    return response_body, 200

@api.route('/planets', methods=['GET'])
def planets():
    response_body = {}
    url = 'https://www.swapi.tech/api/planets'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        rows = data['results']
        planets_list = []

        for row in rows:
            plan_url = row['url']
            plan_response = requests.get(plan_url)

            if plan_response.status_code == 200:
                plan_data = plan_response.json()
                planets_details = plan_data['result']['properties']

                existing_planet = Planets.query.filter_by(name=planets_details['name']).first()
                if not existing_planet:
                    planet = Planets(name = planets_details.get('name'),
                                    diameter = planets_details.get('diameter'),
                                    rotation_period = planets_details.get('rotation_period'),
                                    orbital_period = planets_details.get('orbital_period'),
                                    gravity = planets_details.get('gravity'),
                                    population = planets_details.get('population'),
                                    climate = planets_details.get('climate'),
                                    terrain = planets_details.get('terrain'))
                    
                    db.session.add(planet)
                    db.session.commit()
                planets_list.append(planets_details)

            response_body['message'] = "Lista de planetas detallados"
            response_body['results'] = planets_list
    return response_body, 200
    
@api.route('/users/<int:id>/character-favorites', methods=['GET'])
def fav_characacter(id):
    response_body = {}
    rows = db.session.execute(db.select(CharacterFavorites).where(CharacterFavorites.user_id == id)).scalars()
    results = [row.serialize() for row in rows]

    response_body['message'] = f"Lista de personajes favoritos del Usuario: {id}"
    response_body['results'] = results
    return response_body, 200

@api.route('/users/<int:id>/planet-favorites', methods=['GET'])
def fav_planet(id):
    response_body = {}
    rows = db.session.execute(db.select(PlanetFavorites).where(PlanetFavorites.user_id == id)).scalars()
    results = [row.serialize() for row in rows]

    response_body['message'] = f"Lista de planetas favoritos del Usuario: {id}"
    response_body['results'] = results
    return response_body, 200

@api.route('/posts/<int:id>/comments', methods=['GET'])
def post_comments(id):
    response_body = {}
    rows = db.session.execute(db.select(Comments).where(Comments.post_id == id)).scalars()
    results = [row.serialize() for row in rows]

    response_body["message"] = f"Lista de Comentarios en el Post: {id}"
    response_body["results"] = results
    return response_body, 200

@api.route('/users/<int:id>/comments', methods=['GET'])
def user_comments(id):
    response_body = {}
    rows = db.session.execute(db.select(Comments).where(Comments.user_id == id)).scalars()
    results = [row.serialize() for row in rows]

    response_body["message"] = f"Lista de Comentarios del Usuario: {id}"
    response_body["results"] = results
    return response_body, 200