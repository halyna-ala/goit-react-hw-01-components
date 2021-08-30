import PropTypes from 'prop-types';
import css from './friend-list.module.css';



const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <ListItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Image src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;


// import PropTypes from "prop-types";
// import  css from 'components/friend-list'
// import friends from './friends.json';                   