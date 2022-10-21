
export interface fetchedPostsInterface {
  albumId: string,
  id: string,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface postInterface {
  title: string
  imgUrl: string
  username: string
}

export interface fetchedUsersInterface {
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
