const template = `
<style>
    * {
        margin: auto 30px;
        font-family: 'Montserrat', sans-serif;
    }

    div,
    img,
    span,
    strong,
    footer {
        margin: 0;
    }

    .block {
        margin: 10px 0;
    }

    .ta-center {
        text-align: center;
    }

    .ta-end {
        text-align: end;
    }

    .d-flex {
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        flex-wrap: wrap;
    }

    div#template {
        margin: 1rem !important;
    }

    .d-grid {
        display: grid;
    }

    .box {
        border-radius: 6px;
        border: 2px solid #9d9d9d;
        padding: 25px 20px;
        margin: 50px 0px;
    }

    .price-block-covered {
        background-color: #D1D1D1;
        padding: 7px;
        position: absolute;
        margin: -15px -10px;
        font-size: 24px;
        font-weight: 400;
        text-decoration: line-through !important;
    }

    .price-block {
        width: 100%;
        border: 2px solid #FF5D0E;
        padding: 5px 0px;
        font-size: 32px;
        font-weight: 900;
    }

    .ta-right {
        text-align: right;
    }

    .ta-center {
        text-align: center;
    }

    .space-between {
        justify-content: space-between;
    }

    .font-XL {
        font-size: 32px;
        font-weight: 900;
    }

    .font-L {
        font-size: 20px;
    }

    .v-title {
        font-size: 18px;
        margin-right: 0;
    }

    .v-data {
        font-size: 18px;
        margin-right: 0;
        font-weight: 900;
    }

    .mt-10 {
        margin-top: 10px;
    }

    .mt-20 {
        margin-top: 20px;
    }

    .m-5 {
        margin: 7px 0 !important;
    }

    .p-L {
        font-size: 16px;

    }

    .p-T {
        font-size: 18px;
    }

    .p-M {
        font-size: 18px;
    }

    .p-S {
        font-size: 14px;
    }

    .p-XS {
        font-size: 12px;
    }

    footer {
        margin-top: 180px;
        color: #D34600;
        font-size: 15px;
    }

    p {
        margin-bottom: 0px;
    }

    .separator {
        border: 1px solid #9d9d9d;
        width: 100%;
        margin: 1rem 0;
    }

    .grey {
        background-color: #D1D1D1;
        padding: 10px !important;
        margin-top: 2rem;
        display: block;
    }

    .parrafo {
        display: block !important;
        font-size: 18px;
        padding-top: -10px !important;
        padding-right: 10px !important;
    }

    .tfooter {
        font-size: 28px;
        font-weight: 900;
    }
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">

<body id="template">
    <% if(test) { %>
      <div> <%= test %></div>
    <% } else { %>
      <div>No messages</div>
    <% } %>
</body>
`

export default template