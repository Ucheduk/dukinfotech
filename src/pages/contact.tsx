import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NameInput from "../components/Form/nameInput";
import TextInput from "../components/Form/textInput";
import EmailInput from "../components/Form/emailInput";
import validate from "../components/Form//validator";
import getFirebase from "../components/firebase";
import './contact.css'


interface MyProps {}

interface MyState {
  database: any,
  messagesRef: any,
  trySubmit: boolean;
  formIsValid: boolean;
  showConfirmMsg: boolean;
  formControls: {[key: string]: any}
}

class Contact extends React.Component<MyProps, MyState> {

  static defaultProps: MyProps = {}
  state: Readonly<MyState> = {
    database: null,
    messagesRef: null,
    trySubmit: false,
    formIsValid: false,
    showConfirmMsg: false,

    formControls: {
      email: {
        value: '',
        placeholder: "Please enter your email address",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 4,
          isEmail: true,
          isRequired: true
        }
      },
      name: {
        value: '',
        placeholder: "Please enter your name",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true
        }
      },
      textarea: {
        value: '',
        placeholder: "Please provide details",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 1,
          isRequired: true
        }
      }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const lazyApp = import('@firebase/app')
    const lazyDatabase = import('@firebase/database')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
      
      //Reference messeges collection
      const messagesRef = getFirebase(firebase).database().ref('messeges');

      this.setState({
        database,
        messagesRef
      })
    })
  }

  triggerConfirmMsg = () => {
    if (this.state.formIsValid) {
      this.setState({
        showConfirmMsg: true
      })
      setTimeout(() => {
        this.setState({
          showConfirmMsg: false
        })
      }, 5000);
    }
  }

  changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    console.log(name)
  
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    
    
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = {
      name: this.state.formControls.name.value,
      email: this.state.formControls.email.value,
      message: this.state.formControls.textarea.value,
    }

    // Sending Message to Firebase
    let newmessagesRef = this.state.messagesRef.push();
    newmessagesRef.set(data)
    console.log(data)

    const updatedControls = {
      ...this.state.formControls
    };

    const formIsValid = false

    for (let inputIdentifier in updatedControls) {
      updatedControls[inputIdentifier].value = '';
      updatedControls[inputIdentifier].valid = false;
      updatedControls[inputIdentifier].touched = false;
    }

    // Clear Form Input
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
      trySubmit: true
    });
    this.triggerConfirmMsg()
  }

  render() {

    return (
      <Layout>
        <SEO title="Contact - Uche Nwakwuo {Duk_Stack}" />
        <section className="container home-section">
          <div className="img-wrapper">
              <div className="duk-image"></div>
            </div>
            <div className="home-section__content">
              <h1 className="title">Contact Me</h1>
              <span className="text-content">
              <form onSubmit={this.handleSubmit} className="request-form" id="request-form">
                <h4>Hi! How can I help you? <i className="underline-box"></i></h4>
                  <p className="p-b-0">HI! MY NAME IS <span className="required">*</span></p>
                  <NameInput 
                    value={this.state.formControls.name.value}
                    placeholder={this.state.formControls.name.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                  />

                  <p className="p-b-0">MY EMAIL ADDRESS IS <span className="required">*</span></p>
                  <EmailInput
                    value={this.state.formControls.email.value}
                    placeholder={this.state.formControls.email.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid} 
                  />

                  <p className="p-b-0">I NEED HELP WITH <span className="required">*</span></p>
                  <TextInput
                    value={this.state.formControls.textarea.value}
                    placeholder={this.state.formControls.textarea.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.textarea.touched}
                    valid={this.state.formControls.textarea.valid}
                  />

                  <div className="form-group">
                      <input type="submit" name="send" id="send" disabled={!this.state.formIsValid} value="Send"/>
                      {this.state.showConfirmMsg? (<p className="success">Thanks for your Message!<br/>I will get in touch with you soon.</p>) : null}
                  </div>
                </form>
              </span>
            </div>
        </section>

      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      <div className="bg-circle-3"></div>
      
      </Layout>
    )
  }
}

export default Contact
