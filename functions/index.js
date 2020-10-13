const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    response.send('Hello, ninjas!');
});

const createNotification = (notification) => {
    return admin
        .firestore()
        .collection('notifications')
        .add(notification)
        .then((doc) => console.log('Notification added', doc));
};

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate((doc) => {
    const project = doc.data();
    const notification = {
        content: 'Added a new projcet',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate((user) => {
    return admin
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
            const newUser = doc.data();
            const notification = {
                content: 'Joined the party',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp(),
            };

            return createNotification(notification);
        });
});

exports.addAdminRole = functions.https.onCall((data, context) => {
    // check request is made by an admin
    if (context.auth.token.admin !== true) {
        return { error: 'Only admins can add other admins, sucker!' };
    }
    // get user and add custom claim (admin)
    return admin
        .auth()
        .getUserByEmail(data.email)
        .then((user) => {
            return admin.auth().setCustomUserClaims(user.uid, {
                admin: true,
            });
        })
        .then(() => {
            return {
                message: `Success! ${data.email} has been made an admin.`,
            };
        })
        .catch((err) => err);
});
