import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Layout from '../shared/ui/layout'
import { useMediumPosts } from './blog.service'
import styled,{css} from 'styled-components'
import moment from 'moment'
import { AppContext } from '../shared/app.context'
import { Loading, Post, Posts} from './blog.sc'

const Blog = (props) => {
    const [loading, posts] = useMediumPosts({})
    const [{config}] = useContext(AppContext)
    return (
        <Layout {...props}>
            <Posts>
                { loading && <Loading><FontAwesomeIcon icon={faSpinner} spin/> Cargando el contenido...</Loading>}
                { !loading && posts?.items?.map(x => (
                    <Post>
                        <span className='pubDate'>{moment(x.pubDate).add(config.timezone,'hours').fromNow()}</span>
                        <h2>{x.title}</h2>
                        <div dangerouslySetInnerHTML={{__html:x.description}}/>

                    </Post>
                    
                ))}
            </Posts>
        </Layout>
    )
}
export default Blog