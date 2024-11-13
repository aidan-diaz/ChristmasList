var purchasedIcons = document.getElementsByClassName("bi-bag-check-fill")
var unpurchasedIcons = document.getElementsByClassName("bi-bag-x-fill")
var trash = document.getElementsByClassName("bi-trash-fill");

Array.from(purchasedIcons).forEach(function(element) {
      element.addEventListener('click', function(){
        const itemName = this.parentNode.parentNode.childNodes[1].innerText
        const itemLink = this.parentNode.parentNode.childNodes[3].href

        fetch('markPurchased', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'itemName': itemName,
            'itemLink': itemLink
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(unpurchasedIcons).forEach(function(element) {
  element.addEventListener('click', function(){
    const itemName = this.parentNode.parentNode.childNodes[1].innerText
    const itemLink = this.parentNode.parentNode.childNodes[3].href

    fetch('markUnpurchased', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'itemName': itemName,
        'itemLink': itemLink
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const itemName = this.parentNode.parentNode.childNodes[1].innerText
        const itemLink = this.parentNode.parentNode.childNodes[3].href
        fetch('christmasListItem', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'itemName': itemName,
            'itemLink': itemLink
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
