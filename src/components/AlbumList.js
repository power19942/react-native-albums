import React,{Component} from 'react';
import {ScrollView,Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state ={albums:[]};
  componentWillMount(){
      axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((res)=>{
            this.setState({
               albums:res.data
            });
      });
  }

  renderAlbums(){
      return this.state.albums.map(album=>
          <AlbumDetail key={album.id} album={album} />);
  }
    
  render(){
      return(
          <ScrollView>
              {this.renderAlbums()}
          </ScrollView>
      )
  }
};

export default AlbumList;