import React, {useRef,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import { RxAvatar } from "react-icons/rx";



const Avatar = ({setLogged}) => {
  const imgRef = useRef();
  const [novoAvatar,setNovoAvatar] = useState(null);
  const navigate = useNavigate();
  const params = useLocation();
  let user = params.state.user;
  let userAvatar = params.state.userAvatar;

 
  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onSalvar = async () => {
    const fd = new FormData();
      fd.append('avatar',novoAvatar);
      let response = await Api.updateAvatar(userAvatar.id,fd);
  
      if(response.status===200){
        console.log('alterou');
        navigate(-1);
      } else {
        alert('Falha ao trocar avatar.');
      }
  }

  const handlerImagem = async (e) => {


    if(e.target.files[0]){
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      
      setNovoAvatar(e.target.files[0]);
    //  const fd = new FormData();
   //   fd.append('avatar',e.target.files[0]);
  //    let response = await Api.updateAvatar(userAvatar.id,fd);
  
  //    if(response.status===200){
   //     console.log('alterou');
  //    }
   }
 
  
  }
 


  return (
    <div className={styles.container}>
    
    <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
    
    <div className={styles.body}>
        <h4>Avatar Atual</h4>
        <div className={styles.blueline}></div>
        {userAvatar.avatar===null?<RxAvatar className={styles.avatar_icone} size={100}/>:<img className={styles.avatar}  src={`${Api.base_storage}/${userAvatar.avatar}`} alt={userAvatar.name} />}
        <h4>Selecione o novo avatar</h4>
        <input className={styles.input} type="file"  id="imagem" name="imagem" onChange={handlerImagem}/>
        <img className={styles.avatar}   ref={imgRef} alt={userAvatar.name} />
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