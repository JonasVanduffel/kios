import { connect } from 'react-redux';

import Layout from './layout/Layout';

function mapStateToProps(state){
    return{
        courses: state.courses,
        announcements: state.announcements,
        schedule: state.schedule,
        type: "Student"
    }
}

const App = connect(mapStateToProps)(Layout);

export default App;