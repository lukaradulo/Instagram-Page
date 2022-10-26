
export interface IPost {
  id: string
  title: string
  url: string
  username: string
}

export interface IComment {
  postId: string
  name: string
  body: string
}

export interface IUser {
  id: 1,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
