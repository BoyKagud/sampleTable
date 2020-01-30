import React from 'react';
import SGProductTable from '../components/SGProductTable';
import { Checkbox } from 'semantic-ui-react';
import '../assets/style.css';

export default class Products extends React.Component {
	render() {
		return(
			<SGProductTable data={tableData} />
		);
	}
}


const tableData = [
  [
    {
      name:"Product Information",
      value: (
        <div className="row padds">
          <div className="col-sm-2">
            <label className="container">
				  <input type="checkbox"/>
				  <span class="checkmark"></span>
            </label>
          </div>
          <div className="col-sm-10" style={{padding: 0}}>
            <div className="col-sm-4">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71oSHWG3%2BvL._AC_SL1500_.jpg" className="main_image" />
            </div>
            <div className="col-sm-8" style={{padding: 0}}>
              <div>
                <p style={{color: "#5381DB", fontSize: '14px', fontWeight: 600}}> Toddler Fishing Game Gifts for 2 3 Year Old Girl and ...</p>
                <img src="https://res.cloudinary.com/teepublic/image/private/s--AUI2k0U8--/c_fit,g_north_west,h_840,w_811/co_262c3a,e_outline:40/co_262c3a,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1477680424/production/designs/757890_1.jpg" className="flag" />
                <span className="tr-span">B078WLh42J</span>
                <span className="tr-span"><i className="fas fa-skull-crossbones" style={{color:"#EB675E"}}></i></span>
                <span className="tr-span"><i className="fas fa-lock" style={{color:"#EB675E"}}></i></span>
                <span className="tr-span"><i className="fas fa-list" style={{color:"#98AECA"}}></i></span>
                <span className="tr-span"><i className="fas fa-cubes" style={{color:"#98AECA"}}></i></span>
                <span className="tr-span"><i className="fas fa-comment-dollar" style={{color:"#98AECA"}}></i></span>
              </div>
            </div>
          </div>
        </div>
        ),
      role: "main",
    },
    {
      name:"KPI",
      value: "",
    },
    {
      name:"Avg Price",
      value: "$5.68",
    },
    {
      name:"Avg Profit",
      value: "$5.68",
    },
    {
      name:"Avg Margin",
      value: "29%",
    },
    {
      name:"Avg Daily Units Sold",
      value: "192",
    },
    {
      name:"Avg Daily Revenue",
      value: "$32,813.36",
    },
    {
      name:"Avg ROI",
      value: "100%",
    },
    {
      name:"Avg Daily Rank",
      value: "9.3",
    },
    {
      name:"Reviews",
      value: "9.3",
    },
    {
      name:"Rating",
      value: "9.3",
    },
    {
      name:"Dimensions",
      value: "9.3",
    },
  ]
];

