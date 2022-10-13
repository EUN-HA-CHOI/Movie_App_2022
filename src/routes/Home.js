import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'; //app경로를 복붙해서 붙이고 경로 바꿔줌
import './Home.css';

class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { //영화 api(정보, 데이터)를 가져오는 함수 //api를 불러 올 때는 axios를 사용. axios.get에 조건을 붙여줄수있음
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); //파일 가져오기
    console.log(movies);
    this.setState({ isLoading: false, movies }) //(movies: movies)키:키값 이름이 동일하면 하나만 써줘도 됨
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000); //로딩 끝나는 지점
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; //구조 분해 할당
    return (
      <section className='container'>
       {isLoading ? 
       (<div className='loader'>
        <span className='loader_text'>'Loading...'</span>
       </div>)
       :
       (<div className='movies'>
        { movies.map((movie,index) => (<Movie
          key={index}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />))}
        </div>)
        }
      </section>
    )
  }
}

export default Home