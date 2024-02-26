const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw Error(
		"Please devine the MONGODB_URI environment variable inside .env.local"
	);
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}
	if (!cached.conn) {
		const opts = {
			bufferCommands: false,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}
	try {
		cached.conn - (await cached.promise);
	} catch (error) {
		cached.promise = null;
		throw error;
	}

	return cached.conn;
}

export default dbConnect;
