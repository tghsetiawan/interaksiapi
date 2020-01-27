import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpadate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    postDatatoAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        }, (err) => {
            console.log('error: ', err)
        })
    }

    updateDatatoAPI = () => {
        axios.put('http://localhost:3004/posts/' + this.state.formBlogPost.id, this.state.formBlogPost).then((res) => {
            console.log(res)
            this.getPostAPI()
            this.setState({
                isUpadate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete('http://localhost:3004/posts/' + data ).then((res) => {
            console.log(res)
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpadate: true
        })

    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpadate)
        {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }) 
    }

    handleSubmit = () => {
        if(this.state.isUpadate)
        {
            this.updateDatatoAPI()
        }
        else
        {
            this.postDatatoAPI()
        }
    }

    handleDetail = (id) => {
         this.props.history.push(`/detail-post/${id}`);
        // this.props.history.push(`/detail-post/1579156591556`);
        // console.log(id)
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p>Judul Halaman Blog Post</p>
                <hr/> 
                <p className="section-title">Blog Post</p>
                <div className="from-add-post"> 
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange}/> 
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="30" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment> 
        )
    }
}

export default withRouter(BlogPost);