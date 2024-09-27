from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    first_name = db.Column(db.String(), unique=False, nullable=True)
    last_name = db.Column(db.String(), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # Do not serialize the password, its a security breach
        return {"id": self.id,
                "email": self.email,
                "is_active": self.is_active}
    
# Model Table
class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=False, nullable=False)
    description = db.Column(db.String, unique=False, nullable=True)
    body = db.Column(db.String, unique=False, nullable=False)
    date = db.Column(db.DateTime, nullable=False) #Valor por defecto
    image_url = db.Column(db.String)


class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String, unique=False, nullable=False)


class Medias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum('image', 'video', 'podcast', name='media_type'))
    url = db.Column(db.String)

class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class CharacterFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class PlanetFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    height = db.Column(db.String, unique=False, nullable=True)
    mass = db.Column(db.String, unique=False, nullable=True)
    hair_color = db.Column(db.String, unique=False, nullable=True)
    skin_color = db.Column(db.String, unique=False, nullable=True)
    eye_color = db.Column(db.String, unique=False, nullable=True)
    birth_year = db.Column(db.String, unique=False, nullable=True)
    gender = db.Column(db.String, unique=False, nullable=True)

class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    diameter = db.Column(db.String, unique=False, nullable=True)
    rotation_period = db.Column(db.String, unique=False, nullable=True)
    orbital_period = db.Column(db.String, unique=False, nullable=True)
    gravity = db.Column(db.String, unique=False, nullable=True)
    population = db.Column(db.String, unique=False, nullable=True)
    climate = db.Column(db.String, unique=False, nullable=True)
    terrain = db.Column(db.String, unique=False, nullable=True)
