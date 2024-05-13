
import {Box, Typography, styled} from '@mui/material';
import {useContext} from 'react';
import {Delete} from '@mui/icons-material';
import {DataContext} from '../../../context/DataProvider';
import { API } from '../../../service/api';
const Component =styled(Box)`
   margin-top: 30px;
   background: #F5F5F5;
   padding: 10px;
    `
const Container =styled(Box)`
    display: flex;
    `
const Name =styled(Typography)`
    font-weight:600 
    `
const StyledDate = styled(Typography)`
    color:#878787;
    font-size: 14px;
    `
const DeleteIcon =styled(Delete)`
    margin-left: auto;`
const Comment =({comment, setToggle}) =>{
    const {account} =useContext(DataContext);

    const removeComment = async () => {
        await API.deleteComment(comment._id);
        setToggle(prev => !prev);
     }

    return(
        <Component>
            <Container>
               <Name> {comment.name}</Name>
               <StyledDate> {new Date(comment.date).toDateString()}</StyledDate>
               { comment.name===account.username && <DeleteIcon/>} 
            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box>
        </Component>
    )
}
export default Comment;