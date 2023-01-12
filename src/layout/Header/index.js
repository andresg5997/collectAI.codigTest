import './style.css';

const logoStyle = {
  width: '100%',
  maxWidth: '300px',
};

function Header({
  email,
  fullName,
  company,
  createdAt,
  dueAt,
}) {
  return (
  <>
    <tr className="top">
      <td colSpan="2">
        <table>
          <tbody>
            <tr>
              <td className="title">
                <img
                  src="cai_logo.svg"
                  style={logoStyle}
                  alt="logo"
                />
              </td>

              <td>
                Invoice #: 39291 <br />
                Created: {createdAt} <br />
                Due: {dueAt}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>

    <tr className="information">
      <td colSpan="2">
        <table>
          <tbody>
            <tr>
              <td>
                collectAI GmbH.
                <br />
                20457 Hamburg
                <br />
                Hamburg, Germany
              </td>

              <td>
                {company}
                <br />
                {fullName} <br />
                {email}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </>
  )
}

export default Header;