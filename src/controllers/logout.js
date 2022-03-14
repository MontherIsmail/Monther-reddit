const logout = (req, res) => {
    res.clearCookie('id');
    res.clearCookie('name');
    res.status(201).clearCookie('token').redirect('/');
}

module.exports = { logout };