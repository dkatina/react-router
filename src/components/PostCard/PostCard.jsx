import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ title, body, id }) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/post/${id}`)
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {body}
        </Typography>
        {id?
        <>
          <Divider/>
          <Button onClick={()=>handleClick()}>Comments</Button>
        </>
        :
        <></>
        }
        
      </Box>
      <Divider />
   
    </Card>
  );
}

export default PostCard;
