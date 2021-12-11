import './contactUsForm.css'

type ContactUsFormProps = {}

export const ContactUsForm: React.FC<ContactUsFormProps> = (_: ContactUsFormProps) => {
  return (
    <div className="form-container">
      <form action="/mail" method="post">
        <div className="form-element-container">
          <div className="form-element">
            <input type="text" name="firstName" id="firstName" placeholder="First name" required />
          </div>
        </div>
        <div className="form-element-container">
          <div className="form-element">
            <input type="text" name="lastName" id="lastName" placeholder="Last name" required />
          </div>
        </div>
        <div className="form-element-container">
          <div className="form-element">
            <input type="text" name="companyName" id="companyName" placeholder="Company name" />
          </div>
        </div>
        <div className="form-element-container">
          <div className="form-element">
            <input type="email" name="email" id="email" placeholder="Email" required />
          </div>
        </div>
        <div className="form-element-container">
          <div className="form-element">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              pattern=".{12,}"
              required
            />
          </div>
        </div>
        <div className="form-element-container">
          <input id="contact-us-sumbit" className="form-submit" type="submit" value="Send" />
        </div>
      </form>
    </div>
  )
}
