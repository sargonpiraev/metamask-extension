import React from 'react'
import PropTypes from 'prop-types'

const ParamListItem = ({ name, value }) => (
  <div className='request-signature__row' key={name}>
    <div className='request-signature__row-title'>{name}</div>
    <div className='request-signature__row-value'>{value}</div>
  </div>
)

ParamListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

const JOB_WORKFLOW_TYPE = {
  TIMES_BASED: 'TIMES_BASED',
  FIXED_PRICE: 'FIXED_PRICE',
}

const JOB_WORKFLOW_VALUE = {
  [JOB_WORKFLOW_TYPE.TIMES_BASED]: 1,
  [JOB_WORKFLOW_TYPE.FIXED_PRICE]: 2,
}

const JOB_WORKFLOW_TYPE_BY_VALUE = Object.entries(JOB_WORKFLOW_VALUE).reduce((result, [ key, value ]) => ({ ...result, [value]: key }), {})

const JobWorkflow = ({ workflow }, { t }) => {
  return (
    <ParamListItem
      name={t('_workflow')}
      value={t(JOB_WORKFLOW_TYPE_BY_VALUE[workflow])}
    />
  )
}

JobWorkflow.contextTypes = {
  t: PropTypes.func,
}

const PostJobTxView = ({ methodData: { name, params, ipfs }, metainfo }, { t }) => {
  const paramsByNameMap = params.reduce((result, param) => ({ ...result, [param.name]: param }), {})
  return (
    <div className="confirm-page-container-content__data">

      <div className="confirm-page-container-content__data-box-label">
        {t('youAreTryingTo')}
        <span className="confirm-page-container-content__function-type">
          { t(name) || t('notFound') }
        </span>
        &nbsp;
        {/*called*/}
        {/*&nbsp;*/}
        {/*{ipfs.name}*/}
        {/*&nbsp;*/}
        {t('withParams')}:
      </div>
      {JSON.stringify(metainfo)}
      {/*<ParamListItem name='Job Title' value={ipfs.name} />*/}
      {/*<JobWorkflow workflow={paramsByNameMap._workflow.value} />*/}
      {/*{*/}
      {/*params && (*/}
      {/*<div className='request-signature__rows' style={{ overflowY: 'auto' }}>*/}
      {/*{*/}
      {/*params.map(({ type, name, value }) => {*/}
      {/*if (type === 'bool') value = value.toString()*/}
      {/*return (*/}
      {/*<div className='request-signature__row' key={name}>*/}
      {/*<div className='request-signature__row-title'>{t(name)}</div>*/}
      {/*<div className='request-signature__row-value'>{value}</div>*/}
      {/*</div>*/}
      {/*)*/}
      {/*})*/}
      {/*}*/}
      {/*</div>*/}
      {/*)*/}
      {/*}*/}

      {/*<br/>*/}
      {/*<br/>*/}

      {/*<div className="confirm-page-container-content__data-box-label">*/}
      {/*{`${t('functionType')}:`}*/}
      {/*<span className="confirm-page-container-content__function-type">*/}
      {/*{ name || t('notFound') }*/}
      {/*</span>*/}
      {/*</div>*/}
      {/*{*/}
      {/*params && (*/}
      {/*<div className="confirm-page-container-content__data-box">*/}
      {/*<div className="confirm-page-container-content__data-field-label">*/}
      {/*{ `${t('parameters')}:` }*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*<pre>{ JSON.stringify(params, null, 2) }</pre>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*)*/}
      {/*}*/}

      {/*<div className="confirm-page-container-content__data-box-label">*/}
      {/*{`${t('hexData')}: ${ethUtil.toBuffer(data).length} bytes`}*/}
      {/*</div>*/}
      {/*<div className="confirm-page-container-content__data-box">*/}
      {/*{ data }*/}
      {/*</div>*/}
    </div>
  )
}

PostJobTxView.contextTypes = {
  t: PropTypes.func,
}

export default PostJobTxView
