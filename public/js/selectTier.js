const selectTierHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#tier_name').value
    const services = document.querySelector('#tier_services').value
    const description = document.querySelector('#tier_description').value
    const price = document.querySelector('#tier_price').value
    const user_id = document.querySelector('#user_id').value
  
    if (name && services && description && price && user_id) {
      const response = await fetch(`/api/profile`, {
        method: 'POST',
        body: JSON.stringify({ name, services, description, price, user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/profile/${id}`);
      } else {
        alert('Failed to update Tier');
      }
    }
    else {
      alert('Please make a selection')
    }

};

document
    .querySelector("#tier_btn")
    .addEventListener("click", selectTierHandler);