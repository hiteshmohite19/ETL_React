import React from 'react'

function AWS_S3() {
  return (
      <>
          <div className="contaianer">
              <div className="row">
                  <div className="mb-2 col-4">
                      <label>Role ARN</label>
                      <input
                          name="ip"
                          type="text"
                          className="form-control"
                          placeholder="arn:aws:my-project"
                      />
                  </div>
                  <div className="mb-2 col-4">
                      <label>Role Session Name</label>
                      <input
                          name="port"
                          type="text"
                          className="form-control"
                          placeholder="my-project"
                      />
                  </div>
                  <div className="mb-2 col-4">
                      <label>Bucket Name</label>
                      <input
                          name="databasename"
                          type="text"
                          className="form-control"
                          placeholder="lymsnsdfv"
                      />
                  </div>
              </div>
          </div>
      </>
  );
}

export default AWS_S3