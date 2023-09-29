const selectTierHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value
    const services = document.querySelector('#services').value
    const description = document.querySelector('#description').value
    const price = document.querySelector('#price').value
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
        document.location.replace(`/profile`);
      } else {
        alert('Failed to update Tier');
      }
    }
    else {
      alert('Please make a selection')
    }

};

document
    .querySelector("#futureButton")
    .addEventListener("click", selectTierHandler);