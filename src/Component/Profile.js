import React, { Component } from 'react'
import '../Css/Profile.css'

class Profile extends Component {
  render() {
    return (
      <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body text-center">
                <div> <img src="https://img.icons8.com/bubbles/100/000000/administrator-male.png" className="img-lg rounded-circle mb-4" alt="profile image" />
                  <h4>Sam Disanjo</h4>
                  <p className="text-muted mb-0">Social Activist</p>
                </div>
                <p className="mt-2 card-text"> For what reason would it be advisable for me to think about business content? </p> <button className="btn btn-info btn-sm mt-3 mb-4">Follow</button>
                <div className="border-top pt-3">
                  <div className="row">
                    <div className="col-4">
                      <h6>4354</h6>
                      <p>Post</p>
                    </div>
                    <div className="col-4">
                      <h6>455K</h6>
                      <p>Followers</p>
                    </div>
                    <div className="col-4">
                      <h6>34K</h6>
                      <p>Likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
  }
}
export default Profile