import React, { useEffect } from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { getUsers } from '../modules/users';

const UsersContainer = ({ users, getUsers }) => {
    // 컴포넌트가 마운트 되고 나서 호출
    useEffect(() => {
        if (users) return; // users가 이미 유효하다면 요청하지 않음;
        getUsers();
    }, [getUsers, users]);
    return <Users users={users} />;
};

export default connect(
    state => ({
        users: state.users.users,
    }),
    {
        getUsers,
    },
)(UsersContainer);
