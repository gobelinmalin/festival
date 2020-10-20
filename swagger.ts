const swaggerDocument = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "APIs Festival Document",
    description:
      "This is a sample server Festival server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).",
    termsOfService: "",
    contact: {
      name: "Gobelin Malin",
      email: "mariemeline.paus@gmail.com"
    }
  },
  host: "api-festit-09-20.herokuapp.com",
  basePath: "/api",
  schemes: "https",
  paths: {
    "/artists": {
      get: {
        description: "Returns all artits",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idartist",
            description: "Artist id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "name",
            description: "Artist name",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image_url",
            description: "Artist image profil",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "tracker_count",
            description: "Artist count of tracker",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "music_url",
            description: "Artist youtube link music",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of artists.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/artistItem"
              }
            }
          }
        }
      },
      post: {
        description: "Create one artist with parameter : name, image_url, tracker_count, music_url",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "artistItem",
            description: "Artist item to add",
            schema: {
              $ref: "#/definitions/artistItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one artist."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description: "Modify one artist with parameter : name, image_url, tracker_count, music_url",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "artistItem",
            description: "Artist item to modify",
            schema: {
              $ref: "#/definitions/artistItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one artist."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one artist with parameter : idartist",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "artistItem",
            description: "Artist item to delete",
            schema: {
              $ref: "#/definitions/artistItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one artist."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/artists/id/:id": {
      get: {
        description: "Returns one artist with is id (ex: 1",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "name",
            description: "Artist id",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "One artist."
          }
        }
      }
    },
    "/artists/:name": {
      get: {
        description:
          "Returns one artist with is name (ex: Beyoncé, Madonna, Marilyn manson, Bruno Mars, Rihanna, Daft Punk, Miley Cyrus, Adele, Sia, Ed Sheeran, Billie Eilish",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "name",
            description: "Artist name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of one artist."
          }
        }
      }
    },
    "/advice": {
      get: {
        description: "Returns all advices",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idadvice",
            description: "Advice id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "title",
            description: "Advice tile",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "comment",
            description: "Advice comment",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "lastname",
            description: "Advice lastname",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "firstname",
            description: "Advice firstname",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of advices.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/adviceItem"
              }
            }
          }
        }
      },
      post: {
        description: "Create one advice with parameter : title, comment, lastname, firstname",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "adviceItem",
            description: "Advice item to add",
            schema: {
              $ref: "#/definitions/adviceItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one advice."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description: "Modify one advice with parameter : title, comment, lastname, firstname",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "adviceItem",
            description: "Advice item to modify",
            schema: {
              $ref: "#/definitions/adviceItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one advice."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one advice with parameter : idadvice",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "adviceItem",
            description: "Advice item to delete",
            schema: {
              $ref: "#/definitions/artistItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one advice."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/ticket": {
      get: {
        description: "Returns all tickets",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idticket",
            description: "ticket id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "name",
            description: "ticket name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of ticket.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/ticketItem"
              }
            }
          }
        }
      },
      post: {
        description: "Create one ticket with parameter : name",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "ticketItem",
            description: "ticket item to add",
            schema: {
              $ref: "#/definitions/ticketItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one ticket."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description: "Modify one ticket with parameter : name",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "ticketItem",
            description: "ticket item to modify",
            schema: {
              $ref: "#/definitions/ticketItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one ticket."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one ticket with parameter : idticket",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "ticketItem",
            description: "ticket item to delete",
            schema: {
              $ref: "#/definitions/ticketItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one ticket."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/tickets/festivals/:idFestival": {
      get: {
        description: "Returns all tickets of one festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id_festival",
            description: "Festival id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns all tickets of one festival.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/festivalItem"
              }
            }
          }
        }
      }
    },
    "/style": {
      get: {
        description: "Returns all styles",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idstyle",
            description: "Style id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "name",
            description: "Style name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of style.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/styleItem"
              }
            }
          }
        }
      },
      post: {
        description: "Create one style with parameter : name",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "styleItem",
            description: "Style item to add",
            schema: {
              $ref: "#/definitions/styleItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one style."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description: "Modify one style with parameter : name",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "styleItem",
            description: "Style item to modify",
            schema: {
              $ref: "#/definitions/styleItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one style."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one style with parameter : idstyle",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "styleItem",
            description: "Style item to delete",
            schema: {
              $ref: "#/definitions/styleItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one style."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/festival": {
      get: {
        description: "Returns all festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idfestival",
            description: "Festival id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "name",
            description: "Festival name",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "datetime",
            description: "Festival time",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "description",
            description: "Description of festival",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "city",
            description: "Festival city",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "country",
            description: "Festival country",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image1",
            description: "Festival image 1 url",
            required: false,
            type: "string",
            format: "url"
          },
          {
            in: "query",
            name: "image2",
            description: "Festival image 2 url",
            required: false,
            type: "string",
            format: "url"
          },
          {
            in: "query",
            name: "image3",
            description: "Festival image 3 url",
            required: false,
            type: "string",
            format: "url"
          },
          {
            in: "query",
            name: "image4",
            description: "Festival image 4 url",
            required: false,
            type: "string",
            format: "url"
          },
          {
            in: "query",
            name: "url_video",
            description: "Festival url video",
            required: false,
            type: "string",
            format: "url"
          }
        ],
        responses: {
          "200": {
            description: "A list of all festival.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/festivalItem"
              }
            }
          }
        }
      },
      post: {
        description:
          "Create one festival with parameter : name, datetime, description, city, country, image1, image2, image3, image4, url_video",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "festivalItem",
            description: "Festivel item to add",
            schema: {
              $ref: "#/definitions/festivalItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one festival."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description: "Modify one festival with parameter :  idfestival",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "festivakItem",
            description: "Festival item to modify",
            schema: {
              $ref: "#/definitions/festivalItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one festival."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one festival with parameter : idfestival",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "festivalItem",
            description: "Festival item to delete",
            schema: {
              $ref: "#/definitions/festivalItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one festival."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/festival/country/:name": {
      get: {
        description: "Returns list of festival with name of is country",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "country",
            description: "festival country name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of festival."
          }
        }
      }
    },
    "/festival/style/:name": {
      get: {
        description: "Returns list of festival with name of is style",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "name",
            description: "Festival style name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of festival."
          }
        }
      }
    },
    "/festival/date/:date": {
      get: {
        description: "Returns list of festival with id date",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "date",
            description: "Festival date",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of festival."
          }
        }
      }
    },
    "/festival/:idFestival/artists": {
      get: {
        description: "Returns list of artists with is id festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "name",
            description: "Artist name",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "A list of artists."
          }
        }
      }
    },
    "/festival/:idFestival/artists/:idArtist": {
      post: {
        description: "Join artist and festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id_artist",
            description: "Artist id",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "id_festival",
            description: "Festival id",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "Join ok"
          }
        }
      },
      put: {
        description: "Modify link between festival and artist with parameter :  id_festival, id_artist",
        consumes: ["application/json"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "Modify link between festival and artist."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/festival/:idFestival/styles/:idStyle": {
      post: {
        description: "Join style and festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id_style",
            description: "Style id",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "id_festival",
            description: "Festival id",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "Join ok"
          }
        }
      },
      put: {
        description: "Modify link between festival and style with parameter :  id_festival, id_style",
        consumes: ["application/json"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "Modify link between festival and style."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/accomodation": {
      get: {
        description: "Returns all accomodation",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idaccomodation",
            description: "Accomodation id",
            required: false,
            type: "int"
          },
          {
            in: "query",
            name: "namePackage",
            description: "Package name",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "type",
            description: "Accomodation type",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "soldOut",
            description: "Accomodation sold",
            required: false,
            type: "boolean"
          },
          {
            in: "query",
            name: "passPrice",
            description: "Accomodation pass price",
            required: false,
            type: "number"
          },
          ,
          {
            in: "query",
            name: "priceByNight",
            description: "Accomodation price by night",
            required: false,
            type: "number"
          },
          ,
          {
            in: "query",
            name: "price",
            description: "Accomodation price",
            required: false,
            type: "number"
          },
          {
            in: "query",
            name: "date",
            description: "Accomodation date",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "namePass",
            description: "Accomodation pass nam",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "nameAccomodation",
            description: "Accomodation name",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "hour",
            description: "Accomodation hour",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image1",
            description: "Accomodation image 1",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image2",
            description: "Accomodation image 2",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image3",
            description: "Accomodation image 3",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "image4",
            description: "Accomodation image 4",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "numberPlace",
            description: "Accomodation number place",
            required: false,
            type: "number"
          },
          {
            in: "query",
            name: "pricePlace",
            description: "Accomodation price place",
            required: false,
            type: "number"
          }
        ],
        responses: {
          "200": {
            description: "A list of accomodation.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/accomodationItem"
              }
            }
          }
        }
      },
      post: {
        description:
          "Create one accomodation with parameter : namePackage, type, soldOut, passPrice, priceByNight, price, date, namePass, nameAccomodation, hour, image1, image2, image3,image4, numberPlace, pricePlace",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "accomodationItem",
            description: "Accomodation item to add",
            schema: {
              $ref: "#/definitions/accomodationItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Create one accomodation."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      put: {
        description:
          "Modify one accomodation with parameter : namePackage, type, soldOut, passPrice, priceByNight, price, date, namePass, nameAccomodation, hour, image1, image2, image3,image4, numberPlace, pricePlace",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "accomodationItem",
            description: "Accomodation item to modify",
            schema: {
              $ref: "#/definitions/accomodationItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Modify one accomodation."
          },
          "500": {
            description: "Error Server"
          }
        }
      },
      delete: {
        description: "Delete one accomodation with parameter : idaccomodation",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "accomodationItem",
            description: "Accomodation item to delete",
            schema: {
              $ref: "#/definitions/accomodationItem"
            }
          }
        ],
        responses: {
          "200": {
            description: "Delete one accomodation."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },

    "/festival/:idFestival/accomodations/:idAccomodation": {
      post: {
        description: "Join accomodation and festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id_accomodation",
            description: "Accomodation id",
            required: false,
            type: "string"
          },
          {
            in: "query",
            name: "id_festival",
            description: "Festival id",
            required: false,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "Join ok"
          }
        }
      },
      put: {
        description: "Modify link between festival and accomodation with parameter :  id_festival, id_accomodation",
        consumes: ["application/json"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "Modify link between festival and accomodation."
          },
          "500": {
            description: "Error Server"
          }
        }
      }
    },
    "/artists/:idArtist/style": {
      get: {
        description: "Returns the style of one artist",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idartist",
            description: "Artist id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns the style of one artist.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/artistItem"
              }
            }
          }
        }
      }
    },
    "/artists/style/:id": {
      get: {
        description: "Returns list of artist of one style",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id_style",
            description: "Style id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns list of artist of one style.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/artistItem"
              }
            }
          }
        }
      }
    },
    "/artists/:idArtist/festival": {
      get: {
        description: "Returns all fastival for one artist",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idartist",
            description: "Artist id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns all festival for one artist.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/festivalItem"
              }
            }
          }
        }
      }
    },
    "/festival/:idFestival/style": {
      get: {
        description: "Returns the style of one festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idfastival",
            description: "Festival id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns the style of one festival.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/styleItem"
              }
            }
          }
        }
      }
    },
    "/accomodation/festival/:idFestival": {
      get: {
        description: "Returns all accomodations for one festival",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "idfestival",
            description: "Festival id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns all accomodations for one festival.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/accomodationItem"
              }
            }
          }
        }
      }
    },
    "/artists/:idArtist/events": {
      get: {
        description: "Returns all events for one artist",
        produces: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "artist_id",
            description: "Artist id",
            required: false,
            type: "int"
          }
        ],
        responses: {
          "200": {
            description: "Returns all events for one artist.",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/eventItem"
              }
            }
          }
        }
      }
    }
  },
  definitions: {
    artistItem: {
      type: "object",
      properties: {
        idartist: {
          type: "int",
          format: "id",
          example: "1"
        },
        name: {
          type: "string",
          example: "Beyoncé"
        },
        image_url: {
          type: "string",
          format: "url",
          example: "https://photos.bandsintown.com/thumb/8652941.jpeg"
        },
        tracker_count: {
          type: "string",
          example: "4820842"
        },
        music_url: {
          type: "string",
          format: "url",
          example: "https://www.youtube.com/watch?v=bnVUHWCynig"
        }
      }
    },
    ticketItem: {
      type: "object",
      properties: {
        idticket: {
          type: "int",
          format: "id",
          example: "1"
        },
        name: {
          type: "string",
          example: "Full Madness"
        },
        type: {
          type: "string",
          example: "Full Madness"
        },
        description: {
          type: "string",
          example: "A Full Madness gives you access to festival on friday, Saturday and Sunday"
        },
        price: {
          type: "INT",
          example: 295
        },
        soldOut: {
          type: "INT",
          example: 1
        },
        id_festival: {
          type: "INT",
          example: 1
        }
      }
    },
    styleItem: {
      type: "object",
      properties: {
        idstyle: {
          type: "int",
          format: "id",
          example: "1"
        },
        name: {
          type: "string",
          example: "Afro"
        }
      }
    },
    adviceItem: {
      type: "object",
      properties: {
        idadvice: {
          type: "int",
          format: "id",
          example: "1"
        },
        title: {
          type: "string",
          example: "Title"
        },
        comment: {
          type: "string",
          example: "Description comment"
        },
        lastname: {
          type: "string",
          example: "name"
        },
        firstname: {
          type: "string",
          example: "name"
        }
      }
    },
    festivalItem: {
      type: "object",
      properties: {
        idfestival: {
          type: "int",
          format: "id",
          example: "1"
        },
        name: {
          type: "string",
          example: "Tomorrowland"
        },
        description: {
          type: "string",
          example: "Tomorrowland"
        },
        datetime: {
          type: "string",
          example: "17-19 July 2020 & 24-26 July 2020"
        },
        image1: {
          type: "string",
          format: "url",
          example:
            "https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V2_BvarIbP.jpg"
        },
        image2: {
          type: "string",
          format: "url",
          example:
            "https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V2_BvarIbP.jpg"
        },
        image3: {
          type: "string",
          format: "url",
          example:
            "https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V2_BvarIbP.jpg"
        },
        image4: {
          type: "string",
          format: "url",
          example:
            "https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V2_BvarIbP.jpg"
        },
        url_video: {
          type: "string",
          format: "url",
          example:
            "https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V2_BvarIbP.jpg"
        },
        city: {
          type: "string",
          example: "Boom"
        },
        country: {
          type: "string",
          example: "Belgique"
        }
      }
    },
    accomodationItem: {
      type: "object",
      properties: {
        idartist: {
          type: "int",
          format: "id",
          example: "1"
        },
        namePackage: {
          type: "string",
          example: "Magnificent Greens Package PRE-SALE"
        },
        type: {
          type: "string",
          example: "Magnificent Greens "
        },
        soldOut: {
          type: "boolean",
          example: "true"
        },
        passPrice: {
          type: "number",
          example: "249"
        },
        priceByNight: {
          type: "number",
          example: "19"
        },
        price: {
          type: "number",
          example: "75"
        },
        date: {
          type: "string",
          example: "2020"
        },
        namePass: {
          type: "string",
          example: "Full Madness Pass"
        },
        nameAccomodation: {
          type: "string",
          example: "Magnificent Greens"
        },
        hour: {
          type: "string",
          example: "17H00"
        },
        image1: {
          type: "string",
          format: "url",
          example: "https://www.tomorrowland.com/src/Frontend/Files/ticketing/images/750x/5db1717e2bd7e.jpg"
        },
        image2: {
          type: "string",
          format: "url",
          example: "https://www.tomorrowland.com/src/Frontend/Files/ticketing/images/750x/5db1717e2bd7e.jpg"
        },
        image3: {
          type: "string",
          format: "url",
          example: "https://www.tomorrowland.com/src/Frontend/Files/ticketing/images/750x/5db1717e2bd7e.jpg"
        },
        image4: {
          type: "string",
          format: "url",
          example: "https://www.tomorrowland.com/src/Frontend/Files/ticketing/images/750x/5db1717e2bd7e.jpg"
        },
        numberPlace: {
          type: "number",
          example: "0"
        },
        pricePlace: {
          type: "number",
          example: "0"
        }
      }
    }
  }
};

module.exports = swaggerDocument;
