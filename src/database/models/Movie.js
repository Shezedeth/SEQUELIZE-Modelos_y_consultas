module.exports = (sequelize, dataTypes) => {

    const alias = 'Movie';
    
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue :0
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }
        const config = {
            tableName : 'movies',
            timestamps : true, // si no tiene marca de tiempo debe ir en false
            underscored : true // a sequelicze no le gusta el guion bajo (created_at), le gusta q sea camel case (createdAt), por eso usamos "underscored" osea le decimos a sequelize "che las marcas de tiempo estan escritas con un guion bajo" y queda re pillo. Si viene escrito como le gusta no se pone nada porque "underscored" viene false por defecto.
        }


    const Movie = sequelize.define(alias,cols,config);
    
    return Movie
}