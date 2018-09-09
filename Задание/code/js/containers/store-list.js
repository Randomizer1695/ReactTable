import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

const Row = ({id, firstName, lastName, email, phone}) => (
  <div className="row">
    <div>{id}</div>
    <div>{firstName}</div>
    <div>{lastName}</div>
    <div>{email}</div>    
    <div>{phone}</div>    
  </div>
);

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"id":124,"firstName":"Holli","lastName":"Ivanoski","email":"DRenbarger@id.org","phone":"(265)200-7712","address":{"streetAddress":"3331 Odio Rd","city":"Rancho Cucamonga","state":"MD","zip":"38428"},"description":"suspendisse orci non massa molestie sed at lectus vestibulum in magna ac etiam sollicitudin dolor vitae mi lacus tortor dolor aenean vel sit lacus sit dolor donec dolor sollicitudin et augue elit"},{"id":114,"firstName":"Robert","lastName":"Bowman","email":"ZBrown@sed.ly","phone":"(653)246-3453","address":{"streetAddress":"9706 Aliquam Ct","city":"Oakland","state":"MA","zip":"22163"},"description":"sit convallis aliquam elit mattis sed tortor malesuada ac orci turpis sit non vitae magna sit magna porttitor sapien porttitor porttitor tincidunt orci adipiscing ipsum etiam amet vel id magna elementum tellus"},{"id":627,"firstName":"Jacalyn","lastName":"Scioscia","email":"LCollins@aenean.io","phone":"(724)004-0180","address":{"streetAddress":"6015 Sollicitudin Ln","city":"Rawlins","state":"DE","zip":"67890"},"description":"fringilla pretium nec massa nullam massa convallis aliquam porta curabitur et ipsum placerat adipiscing amet sagittis orci massa consectetur tellus pulvinar ipsum massa porta id quis suspendisse fringilla sed tellus sed lacus"},{"id":134,"firstName":"Marian","lastName":"Fultz","email":"TKrebs@orci.net","phone":"(110)894-2450","address":{"streetAddress":"5628 Vel Rd","city":"Oklahoma City","state":"NV","zip":"66049"},"description":"placerat aliquam sollicitudin sed et aliquam ipsum scelerisque sagittis facilisis magna lacus tempor lorem donec turpis lectus pulvinar magna ac vitae egestas vel donec massa sed malesuada curabitur non lorem aenean et"},{"id":78,"firstName":"Johanan","lastName":"Medeiros","email":"RBascoe@eget.com","phone":"(985)468-6382","address":{"streetAddress":"8487 Ipsum St","city":"Snow Hill","state":"HI","zip":"80910"},"description":"ac lacus vestibulum curabitur massa nullam aliquam magna dolor lacus etiam tortor elementum magna pulvinar amet ante nec tellus tortor rutrum mattis magna tortor lacus nec facilisis ac amet elit quis et"},{"id":444,"firstName":"Coralas","lastName":"Sidaway","email":"CMeyer@convallis.io","phone":"(598)832-8492","address":{"streetAddress":"372 Facilisis Dr","city":"Beaumont","state":"OR","zip":"71026"},"description":"at augue non tortor eget odio aliquam vel dolor morbi sit magna facilisis mattis turpis convallis mi convallis eros consequat sed sapien at risus velit lorem amet orci tincidunt mattis porta sit"},{"id":857,"firstName":"Debbie","lastName":"Merkel","email":"SEngel@fringilla.io","phone":"(730)072-6843","address":{"streetAddress":"18 Vitae Ct","city":"Indianapolis","state":"SD","zip":"10129"},"description":"vitae ante odio placerat lacus pulvinar pharetra tincidunt elit amet malesuada tincidunt mattis lectus etiam pretium vitae morbi quis odio nullam sit nunc vestibulum id magna lacus aenean massa facilisis sed scelerisque"},{"id":745,"firstName":"Ollie","lastName":"Westrate","email":"KTadeu@suspendisse.org","phone":"(800)358-7861","address":{"streetAddress":"7221 Vitae Ave","city":"Saugus","state":"MO","zip":"47961"},"description":"massa lacus lacus vitae dolor suspendisse aenean consectetur lectus morbi aenean sollicitudin augue sed suspendisse aenean vitae donec nec vitae amet suspendisse elementum risus lacus tellus ac libero tincidunt placerat tincidunt dolor"},{"id":847,"firstName":"Jamie","lastName":"Kailin","email":"JMedeiros@dolor.net","phone":"(647)197-0015","address":{"streetAddress":"7032 Odio St","city":"Pittsburgh","state":"KY","zip":"75340"},"description":"ipsum turpis sit pulvinar sollicitudin massa consectetur placerat tortor non quis ante ipsum velit porta et id convallis porta sit amet pulvinar vestibulum magna porta turpis massa velit ipsum tellus porttitor lacus"},{"id":887,"firstName":"Kenyatta","lastName":"Welle","email":"PNesbitt@lacus.net","phone":"(907)064-2582","address":{"streetAddress":"9219 Ipsum Rd","city":"Elmwood Park","state":"SC","zip":"13893"},"description":"hendrerit ipsum amet sollicitudin vel eget augue tincidunt id mattis placerat sed convallis lacus ante non in nullam adipiscing placerat non pretium magna placerat dolor convallis fringilla amet vestibulum nec pulvinar pretium"},{"id":400,"firstName":"Giuseppe","lastName":"Ellington","email":"TJacobs@amet.ly","phone":"(387)354-6607","address":{"streetAddress":"5911 Amet Dr","city":"Odessa","state":"IA","zip":"35490"},"description":"massa ipsum sollicitudin lacus odio malesuada sapien in ipsum sed eros at hendrerit amet risus sollicitudin elit quis sed tincidunt ipsum elit pharetra sapien ac amet ante pulvinar et turpis elit convallis"},{"id":50,"firstName":"Greg","lastName":"Difrancesco","email":"CLinville@lacus.io","phone":"(763)860-7308","address":{"streetAddress":"2238 Lacus Rd","city":"Winter Garden","state":"NC","zip":"70036"},"description":"tellus magna porttitor risus mattis lacus vitae placerat scelerisque nullam ac sapien etiam pharetra sapien eros vestibulum vestibulum vitae mattis malesuada elit lectus sit dui sed vitae sit consequat libero neque neque"},{"id":416,"firstName":"Elaine","lastName":"Oachs","email":"DDupuy@odio.org","phone":"(946)806-6881","address":{"streetAddress":"9205 Aenean Ct","city":"Inez","state":"NV","zip":"46638"},"description":"ac pretium facilisis aliquam augue vestibulum pharetra lacus velit risus tincidunt dolor at nec curabitur et vitae vestibulum molestie convallis magna neque tortor dolor in sed vel morbi aliquam scelerisque pulvinar curabitur"},{"id":217,"firstName":"Bridgette","lastName":"Oshins","email":"GPerrera@magna.com","phone":"(590)033-1327","address":{"streetAddress":"7442 Dolor Ave","city":"Yakima","state":"GA","zip":"20708"},"description":"neque lacus dolor id amet tincidunt curabitur elit ipsum turpis lectus pulvinar pretium dolor in ipsum amet vitae rutrum egestas nec rutrum mattis etiam vestibulum nullam lacus magna lorem massa in neque"},{"id":581,"firstName":"Tom","lastName":"Devine","email":"TEschenbacher@dolor.gov","phone":"(101)929-7302","address":{"streetAddress":"467 At Ct","city":"Rochester","state":"CO","zip":"70481"},"description":"risus donec porta curabitur tempor lectus ac vitae lacus tempor velit tellus turpis elementum dolor sollicitudin risus vel odio sagittis pretium pulvinar in sagittis mattis adipiscing hendrerit facilisis sit etiam magna et"},{"id":152,"firstName":"Mir","lastName":"Mick","email":"CHefner@libero.net","phone":"(622)557-7133","address":{"streetAddress":"6470 Massa Ct","city":"Zionsville","state":"MN","zip":"13955"},"description":"sed dui etiam nullam elit ac sagittis elementum eget lectus ante fringilla odio neque amet sit mattis nec egestas amet odio vitae facilisis mi velit eros sit magna odio dolor eget eros"},{"id":11,"firstName":"Al","lastName":"Lindall","email":"PHippert@augue.ly","phone":"(316)072-6488","address":{"streetAddress":"6613 Porttitor Ave","city":"Moundridge","state":"SD","zip":"38808"},"description":"facilisis convallis in massa lacus odio sed nunc mi donec tincidunt magna aenean tortor dolor egestas adipiscing pulvinar massa scelerisque sit et eros quis lacus massa sollicitudin fringilla dolor dui fringilla tortor"},{"id":882,"firstName":"Tanita","lastName":"Gumatay","email":"GGrimm@magna.ly","phone":"(959)588-4097","address":{"streetAddress":"6676 Turpis Ln","city":"Centreville","state":"MD","zip":"65260"},"description":"aliquam dolor suspendisse in massa magna lectus porta molestie mi mattis tellus amet fringilla donec porta tellus lectus pharetra vestibulum rutrum quis risus dolor et pulvinar vitae aliquam amet ante tortor malesuada"},{"id":89,"firstName":"Vincent","lastName":"Haugland","email":"DFergus@nunc.org","phone":"(424)840-2885","address":{"streetAddress":"7507 Fringilla Ln","city":"Winamac","state":"RI","zip":"75615"},"description":"egestas tincidunt quis malesuada risus consectetur id neque ante dolor non vitae quis massa sed nunc adipiscing egestas magna lacus ipsum sapien nec tincidunt sed massa consectetur augue elementum nullam ac risus"},{"id":553,"firstName":"Gabriel","lastName":"Houston","email":"VSchrag@porta.org","phone":"(913)698-0959","address":{"streetAddress":"3426 Sapien Ln","city":"Corwith","state":"NE","zip":"37299"},"description":"sollicitudin scelerisque ante etiam lacus tortor vel magna vitae sit hendrerit placerat porta nullam at nullam odio dolor quis pulvinar odio tincidunt eros in adipiscing amet lacus magna sed hendrerit sollicitudin lacus"},{"id":476,"firstName":"Geraldine","lastName":"Vickers","email":"SFlamme@pretium.gov","phone":"(750)221-3165","address":{"streetAddress":"9966 Ipsum Rd","city":"Springfield","state":"FL","zip":"33816"},"description":"elit tincidunt risus at pulvinar lacus sapien magna dui donec lacus curabitur suspendisse facilisis ipsum sollicitudin lacus tincidunt sagittis placerat malesuada magna curabitur sed dolor scelerisque sed sed vel tortor consectetur etiam"},{"id":498,"firstName":"Maegan","lastName":"Eckhart","email":"AHeitert@consectetur.org","phone":"(393)229-3924","address":{"streetAddress":"6127 Eros Ln","city":"Pleasant Grove","state":"TX","zip":"23229"},"description":"sit tempor risus mattis lacus malesuada sit tempor augue non nec tortor molestie nec quis mattis dolor lectus pretium nec velit massa pretium sollicitudin massa in augue ante odio magna hendrerit non"},{"id":783,"firstName":"Cesalie","lastName":"Huseyin","email":"EVyater@tincidunt.net","phone":"(949)668-6313","address":{"streetAddress":"3297 Suspendisse Rd","city":"Olive Branch","state":"IL","zip":"65809"},"description":"neque fringilla dolor pretium nunc nunc odio sit orci at rutrum tempor tincidunt hendrerit in et magna pretium vitae lacus dolor etiam quis suspendisse ac lacus aliquam porttitor sagittis lacus molestie pulvinar"},{"id":541,"firstName":"Courtney","lastName":"Abney","email":"DHarrison@ac.io","phone":"(157)088-3907","address":{"streetAddress":"2270 Facilisis Dr","city":"West Hollywood","state":"VT","zip":"95369"},"description":"vestibulum vitae ipsum ipsum vestibulum massa ipsum tempor consequat tempor consequat dolor at etiam lectus ac scelerisque tempor placerat morbi amet molestie consequat ipsum aliquam pretium hendrerit amet vitae sed donec vestibulum"},{"id":801,"firstName":"Bob","lastName":"Woode","email":"MMixon@sollicitudin.com","phone":"(593)088-9075","address":{"streetAddress":"7961 Curabitur Rd","city":"Wichita","state":"KY","zip":"38715"},"description":"curabitur consequat massa placerat porta elementum convallis pulvinar tellus quis vitae etiam scelerisque lorem magna lorem aenean elit mi massa sit morbi nullam ante consectetur egestas donec lacus hendrerit vitae sapien malesuada"},{"id":306,"firstName":"Soledad","lastName":"Cohn","email":"LMelvin@lorem.com","phone":"(830)433-7645","address":{"streetAddress":"8309 Odio Ln","city":"Algonquin","state":"MD","zip":"85675"},"description":"pulvinar magna neque massa nullam tellus sit sagittis tempor porta vitae hendrerit augue vestibulum facilisis molestie at sapien sed tincidunt consequat velit ipsum amet lorem odio consectetur lorem pharetra egestas sollicitudin aliquam"},{"id":624,"firstName":"Francis","lastName":"Swetland","email":"GKaiser@et.gov","phone":"(242)103-4057","address":{"streetAddress":"5769 Mi Ave","city":"Abbotsford","state":"IA","zip":"97574"},"description":"pulvinar at vel vitae dolor vel at convallis scelerisque pulvinar eget tortor curabitur elit et amet vestibulum dolor consequat ac sed massa aliquam vitae convallis nullam curabitur ac ipsum velit ac porta"},{"id":694,"firstName":"Sonja","lastName":"Sanchez","email":"AArias@magna.com","phone":"(170)527-0650","address":{"streetAddress":"7457 Amet Ln","city":"Larimore","state":"SD","zip":"93681"},"description":"convallis tellus consectetur sapien ipsum porttitor tincidunt dui curabitur eros risus egestas dolor nec mattis nec et nec aliquam sed suspendisse eget sit risus ac rutrum amet massa ipsum porta sed placerat"},{"id":258,"firstName":"Lolita","lastName":"Crosswhite","email":"AMeyer@sit.gov","phone":"(994)722-1379","address":{"streetAddress":"3494 Mi Dr","city":"Monmouth Beach","state":"TN","zip":"12062"},"description":"magna sed vitae porttitor quis lacus ac morbi aenean amet vitae ante placerat sed sit lectus rutrum ipsum amet nec neque lectus lectus id lorem dui id dolor amet lorem sapien odio"},{"id":858,"firstName":"Sangita","lastName":"Hemmer","email":"NLilly@libero.net","phone":"(141)019-6974","address":{"streetAddress":"3003 Porttitor Ave","city":"Indianapolis","state":"CA","zip":"72237"},"description":"nec et nec placerat libero donec dolor suspendisse tempor vel aliquam vestibulum lacus nec vestibulum dolor dolor tellus magna eget pulvinar pretium porttitor amet nec aliquam pharetra sagittis magna suspendisse magna amet"},{"id":727,"firstName":"Bobby","lastName":"Dykstra","email":"BVasquez@placerat.org","phone":"(353)144-7040","address":{"streetAddress":"8814 Elementum St","city":"Andover","state":"MO","zip":"12560"},"description":"suspendisse sapien ac sit donec tincidunt porttitor vestibulum sit magna facilisis ac vitae consequat amet lectus vitae etiam morbi dui lacus lacus eget placerat vel tortor nec et ac curabitur vestibulum nec"},{"id":19,"firstName":"Jean","lastName":"Ockerman","email":"JSchwartzberg@augue.gov","phone":"(308)900-0768","address":{"streetAddress":"7449 In Ct","city":"Westwood","state":"AR","zip":"52733"},"description":"aenean sed mattis at orci consectetur nunc molestie adipiscing suspendisse placerat consequat at eget malesuada et et turpis tempor risus in nec scelerisque ac molestie elit non ante sed sed vestibulum porttitor"}],
    };
    this.state.filterText = "";
    
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }

  showList() {
  	return this.props.store.map((item, i) => {
      return (
      	<div key={i}>
          <div onClick={() => this.props.select (item)}>{item.id}</div>
          <div onClick={() => this.props.select (item)}>{item.firstName}</div>
          <div onClick={() => this.props.select (item)}>{item.lastName}</div>
          <div onClick={() => this.props.select (item)}>{item.email}</div>
          <div onClick={() => this.props.select (item)}>{item.phone}</div>
          </div>
      );
    });
  }

    
  render() {
    const rows = this.state.data.map((rowData) => <Row {...rowData} />);

    return (
      <table>
        <thead>        
          <th onClick={() => this.sortBy('id')}>ID</th>
          <th onClick={() => this.sortBy('firstName')}>FirstName</th>
          <th onClick={() => this.sortBy('lastName')}>LastName</th>
          <th onClick={() => this.sortBy('email')}>EMAIL</th>
          <th onClick={() => this.sortBy('phone')}>PHONE</th>
          </thead>
          <tbody>
          {rows}{this.showList()}
          </tbody>
          <tfoot>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          </tfoot>
      </table>
    );    
  }
}

class SearchBar extends React.Component {
  
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }
}

function mapStateToProps (state) {
	return {
		store: state.store
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Table, SearchBar);