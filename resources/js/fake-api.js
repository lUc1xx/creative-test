import { Server } from "miragejs"

export default function initServer() {
	let server = new Server()
	server.get("/api/offers", () => [
		{
			"type": "flat",
		    "id": 1,
		    "attributes": {
		        "title": "3-х комнатная на Минской",
		        "rooms": 3,
		        "address": {
		          	"city": "Tyumen",
		          	"street": "Минская",
		          	"house": "3a",
		          	"room": "123"
		        },
		        "area": 134,
		        "unit": "квм",
		        "price": "5990",
		        "currency": "RUB",
		        "price_type": "За сутки",
		        "images": [
		          	{
		          		"path" : 'img/offer_1.jpg',
		          		'description': 'offer 1'
		          	}
		        ],
		    },
		    "relationships": {
		        "type": "agent",
		        "id": 1,
		        "attributes": {
		          	"first_name": "Василий",
		          	"last_name": "Дроздов",
		          	"middle_name": "Михайлович"
		        }
		    }
		},
		{
			"type": "flat",
		    "id": 2,
		    "attributes": {
		        "title": "2-х комнатная на Проспекте",
		        "rooms": 2,
		        "address": {
		          	"city": "Kazan",
		          	"street": "Проспект Победы",
		          	"house": "62a",
		          	"room": "31"
		        },
		        "area": 68,
		        "unit": "квм",
		        "price": "2200",
		        "currency": "RUB",
		        "price_type": "За сутки",
		        "images": [
		          	{
		          		"path" : 'img/offer_2.jpg',
		          		'description': 'offer 2'
		          	},
		          	{
		          		"path" : 'img/offer_3.jpg',
		          		'description': 'offer 3'
		          	}
		        ],
		    },
		    "relationships": {
		        "type": "agent",
		        "id": 2,
		        "attributes": {
		          	"first_name": "Роман",
		          	"last_name": "Петров",
		          	"middle_name": "Игоревич"
		        }
		    }
		},
		{
			"type": "flat",
		    "id": 3,
		    "attributes": {
		        "title": "6-х комнатная на Проспекте",
		        "rooms": 6,
		        "address": {
		          	"city": "Moscow",
		          	"street": "Мирная",
		          	"house": "11",
		          	"room": "98"
		        },
		        "area": 210,
		        "unit": "квм",
		        "price": "14000",
		        "currency": "RUB",
		        "price_type": "За сутки",
		        "images": [
		          	{
		          		"path" : 'img/offer_2.jpg',
		          		'description': 'offer 2'
		          	},
		          	{
		          		"path" : 'img/offer_3.jpg',
		          		'description': 'offer 3'
		          	}
		        ],
		    },
		    "relationships": {
		        "type": "agent",
		        "id": 3,
		        "attributes": {
		          	"first_name": "Евгений",
		          	"last_name": "Жарковский",
		          	"middle_name": "Артемович"
		        }
		    }
		}
	])
}
