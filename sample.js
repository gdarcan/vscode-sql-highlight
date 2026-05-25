module.exports = {
	get: async function(req, res) {
		var output = {};
		output.permission_groups = await db.vexpo.query(`SELECT id, title FROM profile_groups WHERE id IN (SELECT pg_id FROM (SELECT DISTINCT unnest(permission_group_ids) pg_id FROM vi_profiles WHERE id=$1) foo WHERE pg_id NOT IN (1,6))`, [req.session.auth_id]);
		res.json(output);
	}
}