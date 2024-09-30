"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users, Posts
from datetime import datetime


api = Blueprint('api', __name__)
CORS(api) # Allow CORS requests to this API


@api.route('/hello', methods=['GET'])
def handle_hello():
    response_body = {}
    response_body["message"] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200


@api.route('/users')
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
def post(id):
    response_body = {}
    post = db.session.get(Posts, id)
    if request.method == 'GET':
        rows = db.sessions.execute(db.select(Posts)).scalars()
        response_body['message'] = f"Datos de la publicacion: {id} - (GET)"
        response_body['results'] = post.serialize()
        return response_body, 200
    if request.method == 'PUT':
        data = request.json

        post.title = data.get('title', post.title)
        post.description = data.get('description', post.description)
        post.body = data.get('body', post.body)
        post.image_url = data.get('image_url', post.image_url)
        post.date = datetime.now()

        db.session.commit()
        response_body['message'] = f"Publiacion {id} modifiacada - (PUT)"
        response_body['results'] = post.serialize()
        return response_body, 200
    if request.method == 'DELETE':
        db.session.execute(post)
        db.session.commit()
        rows = db.session.execute(db.select(Posts)).scalars()
        results = [row.serialize() for row in rows]
        response_body['message'] = f"Publicacion {id} eliminada - (DELETE)"
        response_body['results'] = results
        return response_body, 200