const { getUserByEmail } = require ('../../api/user/user.service');
const { signToken } = require ('../auth.service');

async function handlerLogin(request, response){
  const {email, password} = request.body;
  try {
    const user = await getUserByEmail(email);
    if (!user){
      return response.status(401).json({message: 'Invalid email or password'});
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch){
      return response.status(401).json({message: 'Invalid email or password'});
    }
    const token = signToken(user.profile);
    
    response.status(200).json(token);
  }catch (error){
    return response.status(400).json({message: 'este es el error con tiempo de expiracion'});
  }
}

module.exports = {handlerLogin};