import React, {useRef,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import { RxAvatar } from "react-icons/rx";
import DataContext from '../../context/DataContext';


const Avatar = () => {
  const {setLogged,loggedUser} = useContext(DataContext);
  const imgRef = useRef();
  const [novoAvatar,setNovoAvatar] = useState(null);
  const navigate = useNavigate();
 // const params = useLocation();
 // let user = params.state.user;
//  let userAvatar = params.state.userAvatar;

 
  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onSalvar = async () => {
    const fd = new FormData();
      fd.append('avatar',novoAvatar);
      let response = await Api.updateAvatar(loggedUser.id,fd);
  
      if(response.status===200){
        console.log('alterou');
        let json = await response.json();
        loggedUser.avatar = json.avatar;
        navigate(-1);
      } else {
        alert('Falha ao trocar avatar.');
      }
  }

  const handlerImagem = async (e) => {


    if(e.target.files[0]){
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      
      setNovoAvatar(e.target.files[0]);
   
   }
 
  
  }
 


  return (
    <div className={styles.container}>
    
    <Header onLogout={onLogout} showBackButton={true}/>
    
    <div className={styles.body}>
        <h4>Avatar Atual</h4>
        <div className={styles.blueline}></div>
        {loggedUser.avatar===null?<RxAvatar className={styles.avatar_icone} size={100}/>:<img className={styles.avatar}  src={`${Api.base_storage}/${loggedUser.avatar}`} alt={loggedUser.name} />}
        <h4>Selecione o novo avatar</h4>
        <input className={styles.input} type="file"  id="imagem" name="imagem" onChange={handlerImagem}/>
        <img className={styles.avatar}   ref={imgRef} alt={loggedUser.name} />
        <button onClick={onSalvar} className={styles.botaoSalvar}>Salvar</button>
       
    </div>
   
</div>
  )
}

export default Avatar


/*

 const adicionaImagem = async () => {
    const fd = new FormData();
    fd.append('servico_id',idServico);
    fd.append('imagem',novaImagem);
    let response = await Api.addImagem(fd);
    if(response.status===201){
      let json = await Api.getImagensByServico(idServico);
      setImagens(json);
    }
  }
  
  
  
  
    <FormControl>
                    <FormLabel>
                      <Text as='b'>Adicionar imagem:</Text>
                     </FormLabel>
                    <input type="file"  id="imagem" name="imagem" onChange={handlerImagem}/>
                  </FormControl>  
                  <Button color='red'  onClick={adicionaImagem}>Adicionar</Button>
              </HStack>              
            </form>
            
            
            
            
              addImagem: async (fd) => {
    const response = await fetch(`${BASE_API}/imagens`, {
        method: 'POST',
        body: fd
    });
    return response;


    const handlerImagem = (e) => {

 
  setNovaImagem(e.target.files[0]);

}

*/