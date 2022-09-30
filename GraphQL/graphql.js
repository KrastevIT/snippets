      const token = '1234567890';
      const query = `query {
        shop {
          name
        }
      }`
      const headers = {
        'X-Shopify-Storefront-Access-Token':token,
        'Content-Type': 'application/graphql'
      }
      const url = '/api/graphql'

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: query,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
