export default () => ({
    isLoading: false,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam deserunt praesentium, neque ipsa, nobis debitis voluptatem ratione amet nulla eligendi nostrum dolor atque totam minima obcaecati nemo temporibus vero!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Adipisicing sunt labore mollit fugiat anim duis mollit sunt eiusmod elit Lorem irure sunt Lorem. Occaecat magna consequat ea fugiat id deserunt ad anim ipsum. Laborum do officia duis esse et cupidatat velit velit qui ipsum magna elit. Aliqua aliqua ad et aliquip ea id magna sunt ipsum pariatur deserunt consequat. Qui deserunt esse ex Lorem aliqua.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Amet labore cupidatat cupidatat ea deserunt. Voluptate est dolor et incididunt anim elit commodo ad esse eiusmod. Eiusmod dolor aliquip veniam do id dolor do laborum.',
            picture: null
        },
    ]
})