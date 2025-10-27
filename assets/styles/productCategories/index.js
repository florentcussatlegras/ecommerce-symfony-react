


export const ProductCategoryImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.white,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px',
    },
}));