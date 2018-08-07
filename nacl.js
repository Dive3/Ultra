[{   //GERENCIA
    "group":"Gerente",
    "permissions":[{
        "resource":"*",
        "methods":"*",
        "action":"allow"
    }]
},
{    //PRODUCCION
    "group":"Produccion",
    "permissions":[{
        "resource":"/login",
        "methods":["GET", "POST"],
        "action":"allow"
    }]
},
{    //VENTAS
   "group": "Ventas",
   "permissions": [{
       "resource":"*",
       "methods":["*"],
       "action": "allow"
   }]
},
{    //JOYERIA GERENCIA
    "group": "Joyeria(Gerencia)",
    "permissions": [{
        "resource":"/login",
        "methods":["GET", "POST"],
        "action": "allow"
    },
    {   
        "resource":"/joyeria",
        "methods":["GET", "POST"],
        "action": "allow"
    }]
},
{    //JOYERIA VENTAS
    "group": "Joyeria(Ventas)",
    "permissions": [{
        "resource":"/login",
        "methods":["GET", "POST"],
        "action": "allow"
    },
    {   
        "resource":"/joyeria",
        "methods":["GET",],
        "action": "allow"
    }]
}]
