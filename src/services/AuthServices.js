const AuthServices = async (email, pwd) => {
    let errorResponse = '';
    try {
        const URL = 'https://376usy84.directus.app/auth/login';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pwd
            })
        });
        const jsonResponse = await response.json();
        if('errors' in jsonResponse){
            errorResponse = 'Login failed';
            return errorResponse;
            // return jsonResponse;
        }
        return {
            json: jsonResponse.data.access_token,
            jsonBolean: true
        };
    } catch(error) {
        console.log(error);
    }
}
export default AuthServices;