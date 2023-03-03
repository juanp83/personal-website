import Image from "next/image"
import avatarImage from 'public/avatar.png'
  
  const Avatar = () => {
    return (
        <Image 
          style={{ backgroundColor: '#e2eaf3', borderRadius: '100px'}} 
          height={50}
          width={50}
          src={avatarImage} 
          alt="Picture of Juan Portillo, Front-End Software Engineer"
        />
    )
  }
  
  export default Avatar