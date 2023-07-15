    const getMenu = async () => {
        const data = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const json = await data.json();
        return json;
      };

      document.getElementById("name").innerHTML = data.name;
    document.getElementById("price").innerHTML = "$" + data.price + "/-";
    const img = document.getElementById("imgSrc");
      
      const TakeOrder = async () => {
        const order = {
          items: [
            {
              name: 'The Classic',
              price: 10,
            },
            {
              name: 'The Spicy One',
              price: 12,
            },
            {
              name: 'The Veggie',
              price: 8,
            },
          ],
        };
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(order);
          }, 2500);
        });
      };
      
      const orderPrep = async (order) => {
        const orderStatus = {
          order_status: true,
          paid: false,
        };
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(orderStatus);
          }, 1500);
        });
      };
      
      const payOrder = async (orderStatus) => {
        const paidStatus = {
          order_status: true,
          paid: true,
        };
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(paidStatus);
          }, 1000);
        });
      };
      
      const thankyouFnc = () => {
        alert('Thank you for eating with us today!');
      };
      
      const main = async () => {
        const menu = await getMenu();
        const order = await TakeOrder();
        const orderStatus = await orderPrep(order);
        const paidStatus = await payOrder(orderStatus);
        await thankyouFnc();
      };
      
      main();
      