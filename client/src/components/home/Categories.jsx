import {Button, Table, TableHead, TableBody, TableRow, TableCell, styled} from '@mui/material';

import {Link, useSearchParams} from 'react-router-dom';
import {categories} from '../../constants/data';

const StyledTable= styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
margin: 20px;
width: calc(85% - 40px); /* Adjust width to accommodate the '+' sign */
background: #003366; /* Dark blue color */
color: #fff;
position: relative;
overflow: hidden;
border-radius: 1px;
border: none; /* Remove default button border */
&:hover {
    background: #001a33; /* Darker blue color on hover */
}
&::after {
    content: '+';
    position: absolute;
    top: 50%;
    right: 10px; /* Adjust distance from the right */
    transform: translateY(-50%);
    font-size: 1.2rem;
}
`;
  
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    `


const Categories = () =>{
    const [searchParams]= useSearchParams();
    const category=searchParams.get('category');

    return (
        <>
        <StyledLink to={`/create?category=${category || ''}`} > 
            <StyledButton>Add News</StyledButton>
        </StyledLink>  
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <StyledLink to='/'>
                        All Categories
                        </StyledLink> 
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category =>(
                        <TableRow>
                           <TableCell>
                            <StyledLink to={`/?category=${category.type}`}>
                                {category.type}
                            </StyledLink>
                            </TableCell>
                         </TableRow>
                    ))
                }
                
            </TableBody>
        </StyledTable>
        </>
    )
}

export default Categories;