import style from "../components/ItemListContainer.module.css";

const ItemListContainer = () => {
  let data = [
    {
      id: 2,
      categoria: "basquet",
      title: "Mrs",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$3.75",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
    },
    {
      id: 3,
      categoria: "training",
      title: "Ms",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$1.20",
      description:
        "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
    },
    {
      id: 4,
      categoria: "basquet",
      title: "Dr",
      image:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$9.55",
      description:
        "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
    },
    {
      id: 5,
      categoria: "running",
      title: "Mr",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.44",
      description:
        "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum",
    },
    {
      id: 6,
      categoria: "futbol",
      title: "Rev",
      image:
        "https://images.unsplash.com/photo-1577983072945-4a01dcd3439a?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.75",
      description:
        "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    },
    {
      id: 7,
      categoria: "training",
      title: "Mrs",
      image:
        "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$8.20",
      description:
        "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
    },
    {
      id: 8,
      categoria: "sport",
      title: "Dr",
      image:
        "https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$5.84",
      description:
        "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et",
    },
    {
      id: 9,
      categoria: "sport",
      title: "Mr",
      image:
        "https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$4.32",
      description:
        "et tempus semper est quam pharetra magna ac consequat metus sapien ut",
    },
    {
      id: 10,
      categoria: "runing",
      title: "Mrs",
      image:
        "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.75",
      description:
        "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
    },
    {
      id: 11,
      categoria: "running",
      title: "Ms",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.60",
      description:
        "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    },
    {
      id: 12,
      categoria: "training",
      title: "Rev",
      image:
        "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$3.28",
      description:
        "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
    },
    {
      id: 13,
      categoria: "sport",
      title: "Honorable",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$7.83",
      description:
        "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    },
    {
      id: 14,
      categoria: "training",
      title: "Mr",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$4.68",
      description:
        "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
    },
    {
      id: 15,
      categoria: "training",
      title: "Rev",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$5.63",
      description:
        "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    },
    {
      id: 16,
      categoria: "sport",
      title: "Rev",
      image:
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$9.84",
      description:
        "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
    },
    {
      id: 17,
      categoria: "sport",
      title: "Honorable",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.48",
      description:
        "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
    },
    {
      id: 18,
      categoria: "sport",
      title: "Rev",
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.02",
      description:
        "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio",
    },
    {
      id: 19,
      categoria: "futbol",
      title: "Dr",
      image:
        "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$5.94",
      description:
        "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et",
    },
    {
      id: 21,
      categoria: "running",
      title: "Dr",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$0.42",
      description:
        "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
    },
    {
      id: 22,
      categoria: "futbol",
      title: "Mr",
      image:
        "https://images.unsplash.com/photo-1612181346599-a6bfbd67be86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$8.01",
      description:
        "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
    },
    {
      id: 23,
      categoria: "training",
      title: "Mrs",
      image: "../imagenes2/foto22.jpg",
      price: "$2.23",
      description:
        "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin",
    },
    {
      id: 24,
      categoria: "basquet",
      title: "Ms",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$5.47",
      description:
        "leo rhoncus sed vestibulum sit amet cursus id turpis integer",
    },
    {
      id: 25,
      categoria: "futbol",
      title: "Ms",
      image:
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$9.83",
      description:
        "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
    },
    {
      id: 26,
      categoria: "futbol",
      title: "Mrs",
      image:
        "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$8.92",
      description:
        "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 27,
      categoria: "basquet",
      title: "Ms",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$9.76",
      description:
        "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
    },
    {
      id: 28,
      categoria: "running",
      image:
        "https://images.unsplash.com/photo-1524532787116-e70228437bbe?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$6.88",
      description:
        "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    },
  ];
  console.log(data);
  return (
    <div className={style.contenedor}>
      {data.length > 0 &&
        data.map((producto) => {
          // eslint-disable-next-line react/jsx-no-undef
          return (
            <div key={producto.id} className={style.body}>
              <img
                className={style.img}
                src={producto.image}
                alt={producto.title}
              />
              <h4>{producto.categoria}</h4>
              <h4>{producto.description}</h4>
              <h4>Precio: {producto.price}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
