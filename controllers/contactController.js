//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ messsage: "Get all contacts" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ messsage: `Get contact for ${req.params.id}` });
};

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ messsage: "Please enter all fields" });
  }
  res.status(201).json({ messsage: "Create Contaact" });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  console.log("The body is: ", req.body);
  res.status(200).json({
    messsage: `Update contact for ${req.params.id}`,
  });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ messsage: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
