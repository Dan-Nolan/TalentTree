const { create } = require('ipfs-http-client');

const client = create();

(async () => {
  const rage = {
    bonus: {
      attack: 50
    }
  }
  const rageCID = await client.dag.put(rage);

  const shield = {
    bonus: {
      defense: 50
    }
  }
  const shieldCID = await client.dag.put(shield);

  const spell = {
    bonus: {
      magic: 50
    }
  }
  const spellCID = await client.dag.put(spell);

  const warrior = {
    class: "Warrior",
    bonus: {
      health: 100
    },
    subskills: [shieldCID, rageCID]
  }
  const warriorCID = await client.dag.put(warrior);

  const mage = {
    class: "Mage",
    bonus: {
      magic: 100
    },
    subskills: [shieldCID, spellCID]
  }
  const mageCID = await client.dag.put(mage);

  const talentTree = {
    classes: [mageCID, warriorCID]
  }
  const talentTreeCID = await client.dag.put(talentTree);

  console.log(talentTreeCID);
})();
