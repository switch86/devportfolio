import React from "react"

const DropDown = (props) => {
    const {collection, setCollection} = props
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenu = (filter) => {
      console.log(collection)
      const newCollection = collection.filter(project => project.skills.includes(filter))
      setCollection(newCollection) 
      setOpen(false);
    };

  
    return (
      <Dropdown
        open={open}
        trigger={<a onClick={handleOpen}>Filter Projects</a>}
        menu={[
            <a onClick={() => handleMenu('React')} name="React">React</a>,
            <a onClick={() => handleMenu('Node')}>Node.Js</a>,
            <a onClick={() => handleMenu('Express')}>Express</a>,
            <a onClick={() => handleMenu('CSS')}>CSS</a>,
            <a onClick={() => handleMenu('Bootstrap')}>Bootstrap</a>,
            <a onClick={() => handleMenu('MongoDB')}>MongoDB</a>,
            <a onClick={() => handleMenu('Mongoose')}>Mongoose</a>,
            <a onClick={() => handleMenu('JWT')}>JWT Authentication</a>
        ]}
      />
    );
  };
  
  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="filterContainer">
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
              ))}
          </ul>
     ) : null}
     </div>
      </div>
    );
  };
  export default DropDown 