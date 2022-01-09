(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/carrinho.292cf444.png"},25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/title.494eb90f.png"},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),s=(a(30),a(11)),o=a.n(s),u=a(15),l=a(16),d=a(3),m=a(4),p=a(7),h=a(6),b=a(5),f=(a(32),a(12)),v=a(1),E=a(22),g=a.n(E),y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.cartList;return r.a.createElement("div",null,r.a.createElement(f.b,{to:{pathname:"/cart",state:e}},r.a.createElement("div",{className:"cart-button-container"},r.a.createElement("div",null,r.a.createElement("img",{className:"cart-button-img",src:g.a})),r.a.createElement("div",null,0===e.length?null:r.a.createElement("p",{className:"cart-button-number","data-testid":"shopping-cart-size"},e.length)))))}}]),a}(r.a.Component),C=(a(41),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.cartList;return r.a.createElement("div",{className:"header-container"},r.a.createElement(f.b,{to:"/"},r.a.createElement("h1",{className:"header-title"},"FrontEnd Online Store")),r.a.createElement("div",{className:"header-cart-button"},r.a.createElement(y,{cartList:e})))}}]),a}(r.a.Component)),j=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.categories,a=e.onInputChange,n=e.onClickCategory,c=e.renderProducts,i=e.verifyProductList,s=e.cartList;return r.a.createElement("div",null,r.a.createElement(C,{cartList:s}),r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-container-input"},r.a.createElement("label",{htmlFor:"input-text"},r.a.createElement("input",{onChange:a,"data-testid":"query-input",type:"text",id:"input-text"})),r.a.createElement("button",{className:"home-container-input-button",type:"button","data-testid":"query-button",onClick:c},"Pesquisar")),r.a.createElement("div",{className:"home-container-category-and-list"},r.a.createElement("div",{className:"home-category"},r.a.createElement("h3",{"data-testid":"home-initial-message"},"Categorias"),r.a.createElement("section",null,t.map((function(e){var t=e.id,a=e.name;return r.a.createElement("p",{key:t},r.a.createElement("label",{htmlFor:t},a,r.a.createElement("input",{name:"category",key:t,id:t,value:a,type:"radio",onClick:n,"data-testid":"category"})))})))),r.a.createElement("div",{className:"home-list"},i()))))}}]),a}(r.a.Component),O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={quantity:1,disabled:!1},e.changeQuantityIncrease=e.changeQuantityIncrease.bind(Object(p.a)(e)),e.changeQuantityDecrease=e.changeQuantityDecrease.bind(Object(p.a)(e)),e.disabledButton=e.disabledButton.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"disabledButton",value:function(){var e=this.props.item;this.state.quantity===e.available_quantity?this.setState({disabled:!0}):this.setState({disabled:!1})}},{key:"changeQuantityIncrease",value:function(){var e=this,t=this.props.item;this.state.quantity<t.available_quantity&&this.setState((function(e){return{quantity:e.quantity+1}}),(function(){return e.disabledButton()}))}},{key:"changeQuantityDecrease",value:function(){var e=this;this.state.quantity>1&&this.setState((function(e){return{quantity:e.quantity-1}}),(function(){return e.disabledButton()}))}},{key:"render",value:function(){var e=this.props.item,t=this.state,a=t.quantity,n=t.disabled;return r.a.createElement("div",{className:"item-cart-container"},r.a.createElement("div",{className:"item-cart-product"},r.a.createElement("img",{src:e.thumbnail,alt:e.title,className:"item-cart-product-image"}),r.a.createElement("div",{className:"item-cart-product-info"},r.a.createElement("h3",{className:"item-cart-product-info-title","data-testid":"shopping-cart-product-name"},e.title),r.a.createElement("h4",{className:"item-cart-product-info-id"},"ID:"," ",e.id),r.a.createElement("h2",{className:"item-cart-product-info-price"},"R$"," ",(e.price*a).toFixed(2)))),r.a.createElement("div",{className:"item-cart-buttons"},r.a.createElement("button",{className:"item-cart-buttons-inc-dec",onClick:this.changeQuantityDecrease,type:"button","data-testid":"product-decrease-quantity"},"-"),r.a.createElement("p",{className:"item-cart-buttons-quantity","data-testid":"shopping-cart-product-quantity"},a),r.a.createElement("button",{className:"item-cart-buttons-inc-dec",onClick:this.changeQuantityIncrease,type:"button","data-testid":"product-increase-quantity",disabled:n},"+")))}}]),a}(r.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.location.state,a=e.cartList,n=t;return r.a.createElement("div",{className:"shopping-cart-container"},r.a.createElement(C,{cartList:a}),0===n.length?r.a.createElement("h3",{className:"shopping-cart-empty","data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):n.map((function(e){return r.a.createElement(O,{item:e,key:e.id})})),0===n.length?null:r.a.createElement(f.b,{to:{pathname:"/checkout",state:n}},r.a.createElement("button",{className:"home-container-input-button",type:"button","data-testid":"checkout-products"},"Finalizar")))}}]),a}(r.a.Component),N=a(24),L=a.n(N),q=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e={size:40,count:5,isHalf:!1,value:1,color:"#b4b4b4",activeColor:"#dada27"},t=this.props,a=t.location.state,n=a.title,c=a.thumbnail,i=a.price,s=a.id,o=a.shipping,u=t.addToCart,l=t.cartList;return r.a.createElement("div",{"data-testid":"product",className:"PD-page-container"},r.a.createElement(C,{cartList:l}),r.a.createElement("div",{className:"PD-page-product-detail"},r.a.createElement("h3",{"data-testid":"product-detail-name",className:"PD-page-title"},n),r.a.createElement("img",{className:"PD-page-image",src:c,alt:n}),r.a.createElement("h2",{className:"PD-page-price"},"R$"," ",i),o.free_shipping&&r.a.createElement("p",{className:"PD-page-free-shipping","data-testid":"free-shipping"},"Frete Gr\xe1tis"),r.a.createElement("input",{className:"home-container-input-button",id:s,type:"button",value:"Adicionar item","data-testid":"product-detail-add-to-cart",onClick:u})),r.a.createElement("form",{className:"PD-page-form"},r.a.createElement("h3",{className:"PD-page-form-evaluate"},"Avalie este produto"),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("p",null,"Email"),r.a.createElement("input",{type:"email"})),r.a.createElement(L.a,e),r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",id:"",cols:"70",rows:"5",placeholder:"Descreva aqui sua avalia\xe7\xe3o..."}),r.a.createElement("button",{className:"home-container-input-button",type:"button"},"Avaliar")))}}]),a}(r.a.Component),x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.state,t=e.title,a=e.thumbnail,n=e.price,c=e.id,i=e.shipping;return r.a.createElement("div",{"data-testid":"product",className:"home-list-product-detail"},r.a.createElement("img",{className:"home-list-product-detail-image",src:a,alt:t}),r.a.createElement("h3",{className:"home-list-product-detail-title"},t),r.a.createElement("h4",{className:"home-list-product-detail-id"},c),r.a.createElement("div",{className:"home-list-product-detail-price-free-shipping-container"},r.a.createElement("h2",{className:"home-list-product-detail-price"},"R$"," ",n),i.free_shipping&&r.a.createElement("p",{className:"home-list-product-detail-free-shipping","data-testid":"free-shipping"},"FRETE GR\xc1TIS")))}}]),a}(r.a.Component),P="https://api.mercadolibre.com/sites/MLB/categories";function S(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.location.state,a=e.cartList,n=t.map((function(e){return e.price})).reduce((function(e,t){return e+t}));return r.a.createElement("div",{className:"item-cart-container"},r.a.createElement(C,{cartList:a}),r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{className:"item-cart-product",key:e.id},r.a.createElement("img",{className:"item-cart-product-image",src:e.thumbnail,alt:e.title,width:"50px"}),r.a.createElement("div",{className:"item-cart-product-info"},r.a.createElement("h3",{className:"item-cart-product-info-title"},e.title),r.a.createElement("h3",{className:"item-cart-product-info-price"},"R$"," ",e.price)))})),r.a.createElement("h2",null,"Valor Total: R$".concat(n.toFixed(2))),r.a.createElement("form",{className:"checkout-form-container"},r.a.createElement("div",null,r.a.createElement("input",{type:"text","data-testid":"checkout-fullname",placeholder:"Nome Completo",required:"required"}),r.a.createElement("input",{type:"email","data-testid":"checkout-email",placeholder:"Email",required:"required"}),r.a.createElement("input",{type:"text","data-testid":"checkout-cpf",placeholder:"CPF",required:"required"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text","data-testid":"checkout-phone",placeholder:"Telefone",required:"required"}),r.a.createElement("input",{type:"text","data-testid":"checkout-cep",placeholder:"CEP",required:"required"}),r.a.createElement("input",{type:"text","data-testid":"checkout-address",placeholder:"Endere\xe7o",required:"required"})),r.a.createElement("button",{className:"home-container-input-button",type:"submit"},"Comprar"))))}}]),a}(r.a.Component),F=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={categories:[],inputSearch:"",idCategories:"",productsList:[],cartList:[]},e.renderCategories=e.renderCategories.bind(Object(p.a)(e)),e.renderProducts=e.renderProducts.bind(Object(p.a)(e)),e.onInputChange=e.onInputChange.bind(Object(p.a)(e)),e.onClickCategory=e.onClickCategory.bind(Object(p.a)(e)),e.verifyProductList=e.verifyProductList.bind(Object(p.a)(e)),e.addToCart=e.addToCart.bind(Object(p.a)(e)),e.addLocalStorage=e.addLocalStorage.bind(Object(p.a)(e)),e.restoreCartList=e.restoreCartList.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.renderCategories(),this.restoreCartList()}},{key:"onInputChange",value:function(e){var t=e.target.value;this.setState({inputSearch:t})}},{key:"onClickCategory",value:function(e){var t=this,a=e.target.id;this.setState({idCategories:a},(function(){return t.renderProducts()}))}},{key:"addToCart",value:function(e){var t=this,a=e.target,n=this.state,r=n.productsList,c=n.cartList,i=a.id,s=r.filter((function(e){return e.id===i}));this.setState({cartList:[].concat(Object(l.a)(c),Object(l.a)(s))},(function(){return t.addLocalStorage()}))}},{key:"addLocalStorage",value:function(){var e=this.state.cartList;localStorage.setItem("cartLocalStorage",JSON.stringify(e))}},{key:"restoreCartList",value:function(){var e=JSON.parse(localStorage.getItem("cartLocalStorage"));null!==e&&this.setState({cartList:e})}},{key:"verifyProductList",value:function(){var e=this,t=this.state.productsList;if(t.length>0)return r.a.createElement("div",null,t.map((function(t){return r.a.createElement("div",{key:t.id,className:"home-list-product"},r.a.createElement(f.b,{to:{pathname:"/productdetails/".concat(t.id),state:t},"data-testid":"product-detail-link"},r.a.createElement(x,{state:t})),r.a.createElement("input",{className:"home-container-input-button",id:t.id,type:"button",value:"Adicionar item","data-testid":"product-add-to-cart",onClick:e.addToCart}))})))}},{key:"renderProducts",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.idCategories,n=t.inputSearch,e.next=3,D(a,n);case 3:r=e.sent,this.setState({productsList:r.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCategories",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({categories:Object(l.a)(t)});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,{basename:"/frontend-online-store"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(j,Object.assign({},t,e.state,{renderCategories:e.renderCategories,renderProducts:e.renderProducts,onInputChange:e.onInputChange,onClickCategory:e.onClickCategory,verifyProductList:e.verifyProductList,addToCart:e.addToCart}))}}),r.a.createElement(v.a,{exact:!0,path:"/cart",render:function(t){return r.a.createElement(k,Object.assign({},t,e.state))}}),r.a.createElement(v.a,{exact:!0,path:"/productdetails/:id",render:function(t){return r.a.createElement(q,Object.assign({},t,e.state,{renderCategories:e.renderCategories,renderProducts:e.renderProducts,onInputChange:e.onInputChange,onClickCategory:e.onClickCategory,verifyProductList:e.verifyProductList,addToCart:e.addToCart}))}}),r.a.createElement(v.a,{exact:!0,path:"/checkout",render:function(t){return r.a.createElement(w,Object.assign({},t,e.state))}}))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.245348d3.chunk.js.map