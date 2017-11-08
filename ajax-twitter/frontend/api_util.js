const APIUtil = {
  followUser: id => {
      // console.log(id);
    return $.ajax({
      method: "POST",
      dataType: "json",
      url: `/users/${id}/follow`
    });
  },
  unfollowUser: id => {
    // console.log(id);
    return $.ajax({
      method: "DELETE",
      dataType: "json",
      url: `/users/${id}/follow`
    });
  }
};

module.exports = APIUtil;
