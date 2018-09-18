const blogs = ( state = [], action ) => {
  switch(aciton.type) {
    case 'BLOGS':
    return action.blogs
    case 'ADD_BLOG':
    return [action.blog, ...state]
    default
    return state
  }
}

export defualt blogs
