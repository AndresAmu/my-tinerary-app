import axios from "axios";

const activitiesActions = { 

    getActivities: () => {
        return async (dispatch, getState) => { 
            const res = await axios.get('https://my-tinerary-back.herokuapp.com/api/activities')
            dispatch({ type: "GET_ACTIVITIES", payload: res.data.response })}
    },

    getOneActivity: (id) => {

        return async (dispatch, getState) => {
            const res = await axios.get(`https://my-tinerary-back.herokuapp.com/api/activities/${id}`)
            dispatch({ type: "GET_ONE_ ACTIVITY", payload: res.data.response })
        }
    },

    getActivitiesByitinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://my-tinerary-back.herokuapp.com/api/activitiesbyitinerary/${id}`)

            dispatch({ type: "GET_ACTIVITY_BYITINERARY", payload: res.data.response })
        }
    },
}

export default activitiesActions