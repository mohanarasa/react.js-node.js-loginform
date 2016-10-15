var React = require('react');
var DefaultLayout = require('./layouts/defaultHome');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <div className="panel panel-warning">
              <div className="panel-heading" className="text-center">
              <h1>  GitHub </h1>
              </div>
              <hr/>
              <img src="images/male-circle-512.png" alt="Profile Image"  className="img-circle" width="250" height="200"  />
            </div>
            <hr/>

            <input type="Search" className="form-control" placeholder="Search..." />
              <br />
              <hr />
                <button type="button" className="btn btn-secondary btn-lg btn-block">< a href='/'>Search</a></button>
            <form action="/save" method="post">
            <br />


            </form>

        </div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;

//hidden field doesnt hsow up onto the screen but shows the information. wihtout this is its submitting the button. making sure that react
// and defualtlayout isrequired at the top. create a class within it and make sure that it retuns the mesg(this.props.msg) to get the message
// and html, button is created.
//    <input type="hidden" name="joke" value={this.props.msg} />
  // <input type="submit" className="btn btn-info" value="Save" />
  //<div className="panel-body"> <h1>{this.props.msg}</h1></div>
