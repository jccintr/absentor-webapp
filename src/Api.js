
// --host=192.168.0.107
const BASE_API = 'http://localhost:8000/api';
//const BASE_API = 'https://tripsun.tk/api';

//const BASE_API = 'http://192.168.0.107:8000/api';
//const BASE_API = 'http://177.104.209.216:8000/api';

export default {
 base_storage: 'http://localhost:8000/storage',
//    base_storage: 'http://192.168.0.107:8000/storage',
   // base_storage: 'http://177.104.209.216:8000/storage',
 //base_storage: 'https://tripsun.tk/storage',
   /*
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();subcategoria
        return json;
    },
    */
    signIn: async (email, password) => {
        const response = await fetch(`${BASE_API}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
       
        return response;
    },
    signUp: async (name,email,role,password,phone,doc,address,empresa_id) => {
        const response = await fetch(`${BASE_API}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,role,password,phone,doc,address,empresa_id})
        });
        return response;
    },
   
  
   // endpoints Empresa
   getEmpresas: async () => {
    const req = await fetch(`${BASE_API}/empresas`);
    const json = await req.json();
    return json;
},
   addEmpresa: async (nome) => {
    const response = await fetch(`${BASE_API}/empresas`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome})
    });
    return response;
   },
   getEmpresa: async (id) => {
    const req = await fetch(`${BASE_API}/empresas/${id}`);
    const json = await req.json();
    return json;
},
updateEmpresa: async (id,nome) => {
    const response = await fetch(`${BASE_API}/empresas/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome})
    });
    //const json = await req.json();
    return response;
},
getUsersEmpresa: async (idEmpresa) => {
    const response = await fetch(`${BASE_API}/empresas/${idEmpresa}/users`);
    //const json = await req.json();
    return response;
},
// Endpoints dos funcionários
getUser: async (id) => {
    const req = await fetch(`${BASE_API}/users/${id}`);
    const json = await req.json();
    return json;
},
updateUser: async (id,name,phone,doc,address,role) => {
    const response = await fetch(`${BASE_API}/users/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,phone,doc,address,role})
    });
    //const json = await req.json();
    return response;
},
updateAvatar: async (id,fd) => {
    const response = await fetch(`${BASE_API}/users/${id}`, {
        method: 'POST',
        body: fd
               
    });
    return response;
},
 // endpoints Faltas
 addFalta: async (empresa_id,funcionario_id,data,dias,motivo) => {
    const response = await fetch(`${BASE_API}/faltas`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({empresa_id,funcionario_id,data,dias,motivo})
    });
    return response;
   },
   getFaltas: async (idFuncionario,ano,mes) => {
    const req = await fetch(`${BASE_API}/faltas/${idFuncionario}/${ano}/${mes}`);
    const json = await req.json();
    return json;
},

}

