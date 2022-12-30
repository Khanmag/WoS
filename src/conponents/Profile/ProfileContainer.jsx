import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setProfileInfoAC, toggleIsFetchingAC} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(toggleIsFetchingAC())
        let userId = this.props.router.params.id
        if (!userId) {
            userId = 15
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.dispatch(setProfileInfoAC(response.data))
                this.props.dispatch(toggleIsFetchingAC())
            })
    }


    render() {
        return (<div>
            {
                (this.props.profilePage.isFetching && this.props.profilePage.profileInfo)
                    ? <Preloader/>
                    : <Profile profilePage={this.props.profilePage}
                               dispatch={this.props.dispatch}/>
            }
        </div>)
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default withRouter(ProfileContainer)